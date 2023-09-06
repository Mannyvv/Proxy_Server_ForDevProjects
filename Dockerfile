#Copy Node js from Docker Repo
FROM node:18

#Create app directory
WORKDIR /usr/src/app

#Install app dependencies from json config files
#A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

#run as if it were ran in CLI
RUN npm install


#Copy files exluded from .dockeringore file to containe root(/user/src/app)
COPY . .

#Expose container ip port 3000 to localhost, binding will occur at Docker Run
EXPOSE 3000

#run as if it were ran in CLI
CMD [ "node", "server.js" ]