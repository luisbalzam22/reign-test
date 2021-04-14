FROM node:12
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD package*.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start:dev"]
