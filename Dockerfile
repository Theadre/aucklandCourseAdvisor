# stage 1
FROM node:alpine AS node
WORKDIR /app
COPY . .
RUN npm install && npm run build

# stage 2

FROM nginx:alpine
COPY /dist/CoursesManager /usr/share/nginx/html
EXPOSE 80