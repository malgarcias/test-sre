FROM node:13
LABEL version="1.0"
LABEL name="test-sre"
#ENV APP_PORT=8082 APP_DIR=/usr/src/app

WORKDIR /usr/src/app

ADD package.json .
ADD package-lock.json .
ADD . .

RUN npm install 

HEALTHCHECK --interval=15s --timeout=10s --retries=3 CMD curl -f http://localhost:APP_PORT/health || exit 1

EXPOSE 8980

CMD [ "node", "app/index.js" ]