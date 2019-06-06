FROM alpine:3.8

RUN apk update && apk upgrade
RUN apk add cmake make g++ git
RUN apk add qt5-qtbase-dev

COPY ./get.sh /usr/local/bin/get.sh
COPY ./build.sh /usr/local/bin/build.sh

RUN chmod +x /usr/local/bin/*.sh

CMD ["sh", "/usr/local/bin/build.sh"]
