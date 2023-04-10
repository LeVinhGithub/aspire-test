
FROM node:16-alpine

COPY . /app

WORKDIR /app

RUN yarn initial

RUN yarn build:staging

EXPOSE 80
