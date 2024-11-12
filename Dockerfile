# Use a Node.js image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code, including the .env file, to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Start the Express app
CMD ["npm", "start"]
