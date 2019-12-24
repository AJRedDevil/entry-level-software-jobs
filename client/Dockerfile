FROM node:alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN npm run build

FROM nginx:1.15.10-alpine
COPY --from=builder /app/build /var/www
COPY ./nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
