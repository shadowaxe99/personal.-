```dockerfile
# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source inside the Docker image
COPY . .

# Build the app for production
RUN npm run build

# Map port 3000 to the outside world (the port number should match with the server's port)
EXPOSE 3000

# Define the command to run the app
CMD [ "node", "server/index.js" ]
```

This `Dockerfile` sets up a Docker container for a Node.js application. It uses Node 14 as the base image, installs dependencies, copies the source files, builds the application, exposes the appropriate port, and specifies the command to start the server.