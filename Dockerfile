#stage 1
FROM node:latest as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine as prod-stage
COPY --from=build /app/dist/booking-tables-front  /usr/share/nginx/html
