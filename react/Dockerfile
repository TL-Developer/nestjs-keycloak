FROM node:18-alpine as build

WORKDIR /usr/app/react

COPY package*.json .

RUN npm ci --silent

COPY . .

RUN npm run build

# Stargin NGINX
FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/app/react/dist /usr/share/nginx/html