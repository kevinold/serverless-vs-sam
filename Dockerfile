FROM node:8.10-alpine@sha256:a55d3e87802b2a8464b3bfc1f8c3c409f89e9b70a31f1dccce70bd146501f1a0

RUN apk update && \
  apk add p7zip bash curl rsync && \
  rm -rf /var/cache/apk/*
