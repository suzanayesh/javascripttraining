FROM node:14-slim

WORKDIR /SuzanYahia-Employee-App/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["index.js" ]