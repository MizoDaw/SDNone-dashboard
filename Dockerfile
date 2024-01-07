FROM node:14

WORKDIR /app

COPY package*.json .


RUN npm install 

COPY  /src /app/src 

COPY  /public /app/public


CMD ["npm" ,"start"]