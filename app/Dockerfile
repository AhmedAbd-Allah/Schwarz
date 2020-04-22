FROM node:10.15-alpine

# Update alpine packages
RUN apk update add --no-cache yarn

# Add pm2
RUN yarn global add pm2 && \
  mkdir /server

COPY . /server

# Enter backend dir
WORKDIR /server
# install modules 
RUN yarn install
# Start server
CMD pm2-runtime start ecosystem.config.js