FROM node:17-alpine  
# Use an official Node.js runtime as a parent image

RUN npm install -g nodemon

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000
# required for docker desktop port mapping

CMD ["npm", "run", "dev"]