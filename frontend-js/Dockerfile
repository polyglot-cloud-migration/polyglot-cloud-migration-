FROM node:18-alpine

# Folder create karein
WORKDIR /app

# Dependencies copy aur install karein
COPY package*.json ./
RUN npm install

# Baaqi saara code copy karein
COPY . .

# Port 3000 open karein
EXPOSE 3000

# Server start karein
CMD ["node", "server.js"]