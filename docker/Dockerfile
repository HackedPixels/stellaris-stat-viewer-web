FROM alpine:3.8

RUN apk update && apk upgrade
RUN apk add thttpd
RUN mkdir web

EXPOSE 80
CMD ["thttpd", "-dd","web","-p","80"]
