FROM hub.deepin.com/library/node:16 AS builder
WORKDIR /linglong-homepage
ADD . .
RUN sed -i 's/http:\/\/10.0.33.45:28803/https:\/\/store.linglong.dev/g' `grep "http:\/\/10.0.33.45:28803" -rl .` && \
    sed -i 's/https:\/\/repo-dev.linglong.space/https:\/\/mirror-repo-linglong.deepin.com/g' `grep "https:\/\/repo-dev.linglong.space" -rl .` && \
    yarn --registry=http://registry-npm.sndu.cn/ install && yarn build

FROM hub.deepin.com/library/nginx:latest
COPY --from=builder /linglong-homepage/.vitepress/dist/ /usr/share/nginx/html
