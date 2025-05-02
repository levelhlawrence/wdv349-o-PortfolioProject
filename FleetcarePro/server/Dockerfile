FROM node:23.3.0

WORKDIR /

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
