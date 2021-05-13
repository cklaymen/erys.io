FROM node:12-alpine

WORKDIR /usr/src/app

COPY ./react-snap ./react-snap
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]