FROM node

COPY . /jdr-front

WORKDIR /jdr-front

EXPOSE 4200

CMD ["npm", "run", "dev"]