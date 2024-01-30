FROM node:14-alpine

WORKDIR /

COPY . /

RUN npm i 

EXPOSE 3000

CMD [ "npm", "start" ]