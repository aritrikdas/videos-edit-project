FROM alpine

RUN apk add --update nodejs nodejs-npm
WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

RUN ls

EXPOSE 3000
#CMD ["node", "./bin/www"]
CMD ["npm", "start"]
#CMD ["sh"]
