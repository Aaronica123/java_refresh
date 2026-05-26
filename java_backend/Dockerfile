FROM node:26-bookworm-slim

WORKDIR /app


COPY ./files /app/files
COPY . /app
WORKDIR /app
RUN npm install 
EXPOSE 3001
WORKDIR /app/files


CMD ["npm","run","dev","port--3001"]