FROM node:6-onbuild

MAINTAINER Micah Roberson <micah.roberson@gmail.com>

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app/
RUN npm cache clean; npm install

# Add the rest of the repository
ADD . /usr/src/app

# Build it
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
