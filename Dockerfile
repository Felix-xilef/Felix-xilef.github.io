FROM node:lts-alpine as build

RUN apk add tzdata

ENV TZ America/Sao_Paulo

WORKDIR /usr/app

COPY . .

RUN yarn install

RUN yarn test:unit run --bail 1

RUN yarn build

FROM nginx:stable-alpine as deploy

COPY --from=build /usr/app/node_modules /usr/app/node_modules

COPY --from=build /usr/app/dist /usr/share/nginx/html
