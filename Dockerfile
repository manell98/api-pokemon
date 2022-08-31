FROM node:latest

WORKDIR /app

COPY . .

#RUN npm install

ENTRYPOINT npm start

EXPOSE 3000