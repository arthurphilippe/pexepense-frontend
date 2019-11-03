FROM node:alpine AS build

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

RUN yarn vue-cli-service build

FROM node:alpine

WORKDIR /app/dist

RUN yarn global add http-server

COPY --from=0 /app/dist /app/dist

CMD http-server
