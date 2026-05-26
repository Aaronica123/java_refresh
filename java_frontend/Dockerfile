FROM node:26-bookworm-slim AS builder
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:1.31.0

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080


