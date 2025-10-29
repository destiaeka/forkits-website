FROM node:18-alpine AS builder
WORKDIR /usr/src/app
RUN apk add --no-cache python3 make g++
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - nginx untuk serve static build
FROM nginx:alpine AS runner
COPY --from=builder /usr/src/app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]