FROM node:21.2.0

WORKDIR /app

# Install package.json dependencies
RUN npm Install

# generate prisma client
RUN npx prisma generate

# COPY packages.json and package-lock.json files
COPY package*.json ./

# generate prisma files
COPY prisma ./prisma/

# copy ENV variable
COPY .env ./

# copy tsconfig.json file
COPY tsconfig.json ./

# command to start the server
CMD npm start

# run and expose the server on port 5000
EXPOSE 5000

COPY . . 



