FROM hub.deepin.com/library/node:16 AS builder
WORKDIR /linglong-homepage
ADD . .
RUN sed -i 's/http:\/\/10.0.33.45:28803/https:\/\/store.linglong.space/g' docs/.vitepress/config.js
RUN yarn --registry=http://registry-npm.sndu.cn/ install && yarn docs:build

FROM hub.deepin.com/library/nginx:latest
COPY --from=builder /linglong-homepage/docs/.vitepress/dist/ /usr/share/nginx/html
