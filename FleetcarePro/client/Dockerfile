FROM node:23.3.0

WORKDIR /

COPY . .

RUN npm install

RUN npm run build

EXPOSE 5173

CMD ["npm", "start"]
