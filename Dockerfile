# Stage 1
FROM nginx:1.17

# Stage 2
COPY build/ /usr/share/nginx/html
