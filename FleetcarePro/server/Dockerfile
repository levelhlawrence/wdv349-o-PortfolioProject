# server/Dockerfile
FROM node:23

WORKDIR /app

# Install dependencies first
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Use ts-node-dev for live reload
RUN npm install --save-dev ts-node-dev

EXPOSE 3000

CMD ["npm", "run", "dev"]
