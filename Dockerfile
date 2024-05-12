# Use a specific node version as base image
FROM node:16 as base

# Set working directory
WORKDIR /app

# Install global packages
RUN npm install -g concurrently

# Copy package.json files for both applications
COPY web/package.json ./web/package.json
COPY api/package.json ./api/package.json

# Install dependencies for both applications
RUN cd web && npm install
RUN cd api && npm install

# Copy the rest of the application files
COPY web/ ./web/
COPY api/ ./api/

# Expose the port the API and web apps run on
EXPOSE 3000 5000

# Command to run both applications
CMD concurrently "cd web && npm run dev" "cd api && npm run dev"
