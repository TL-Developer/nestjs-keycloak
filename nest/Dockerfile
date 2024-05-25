FROM node:18-alpine

WORKDIR /usr/app/nest

COPY package*.json .

RUN npm ci --silent

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/main" ]