#do touch
HOSTWEB=''
HOSTPORT=80

#dont touch
WEBPID=''
ERRORMSG=""

if [ -z ${HOSTWEB} ]; then
	printf 'HOSTWEB is empty'
fi

trap "error 'use the exit command'" SIGINT SIGTERM

start()  {
	if ! [ -d $HOSTWEB ]; then
		error 'could not find web directory'
		return
	fi

	if [ -z $WEBPID ]; then
		docker run -p 80:$HOSTPORT --rm --name thttpd -v /home/jan/web:/web/ -t thttp &
		WEBPID=$!
	else
		error 'already running'
	fi
}

stop() {
	if ! [ -z $WEBPID ]; then
		docker kill thttpd > /dev/null
	else
		error 'not running'
	fi
	WEBPID=''
}

error() {
	ERRORMSG=$1
	printf "?\n"
}

while true; do
	read -e -p "[$(if [ -z $WEBPID ]; then echo 'OFF'; else echo ' ON'; fi)]." cmd
	case $cmd in
		'start')
			start
			;;
		'stop')
			stop
			;;
		'exit')
			if ! [ -z $WEBPID ]; then
				error 'still running'
			else
				exit
			fi
			;;
		'?')
			printf "%s\n" "$ERRORMSG"
			;;
		*)
			if [ -z $cmd ]; then
				error 'empty command'
			else
				error 'unknown command'
			fi
			;;
	esac
done
