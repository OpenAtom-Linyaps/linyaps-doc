FROM hub.deepin.com/library/node:16 AS builder
WORKDIR /linglong-homepage
ADD . .
RUN sed -i 's/http:\/\/10.0.33.45:28803/https:\/\/store.linglong.dev/g' docs/.vitepress/config.js && \
    sed -i 's/http:\/\/10.0.33.45:28803/https:\/\/store.linglong.dev/g' docs/guide/ll-builder/github.md && \
    sed -i 's/http:\/\/10.0.33.45:28803/https:\/\/store.linglong.dev/g' docs/en/guide/ll-builder/github.md && \
    sed -i 's/http:\/\/10.0.33.45:28803/https:\/\/store.linglong.dev/g' docs/.vitepress/theme/components/zh/home/index.vue && \
    sed -i 's/http:\/\/10.0.33.45:28803/https:\/\/store.linglong.dev/g' docs/.vitepress/theme/components/en/home/index.vue && \
    sed -i 's/https:\/\/repo-dev.linglong.space/https:\/\/mirror-repo-linglong.deepin.com/g' docs/.vitepress/theme/components/zh/home/index.vue && \
    sed -i 's/http:\/\/10.0.33.45:28803/https:\/\/mirror-repo-linglong.deepin.com/g' docs/.vitepress/theme/components/en/home/index.vue && \
    yarn --registry=http://registry-npm.sndu.cn/ install && yarn docs:build

FROM hub.deepin.com/library/nginx:latest
COPY --from=builder /linglong-homepage/docs/.vitepress/dist/ /usr/share/nginx/html
