FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN apt-get update 
RUN npm install
COPY . /app
EXPOSE 3000
RUN npm run deploy-prod
RUN npm run build
CMD ["npm", "run", "start"]