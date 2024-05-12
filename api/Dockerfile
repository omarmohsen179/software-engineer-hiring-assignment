# Use the official Node.js 18 image as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json  into the container
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of your application's code
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Command to run the application (this will be overridden by docker-compose command)
CMD ["npm", "run", "dev"]
