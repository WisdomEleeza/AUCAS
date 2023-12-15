FROM node:21.2.0

WORKDIR /app

# COPY packages.json and package-lock.json files
COPY package*.json ./

# generate prisma files
COPY prisma ./prisma/

# copy ENV variable
COPY .env ./



