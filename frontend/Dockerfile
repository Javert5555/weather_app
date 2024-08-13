FROM node:21.7.1-alpine3.19

WORKDIR /app

# COPY package.json .
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE ${FRONT_PORT}
CMD [ "npm", "run", "run-based-on-env"]
