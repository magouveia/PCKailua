# Stage 1: Build the React app
FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Run the server
FROM node:20-slim
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.ts ./
COPY --from=builder /app/src/data/performanceCriteria.ts ./src/data/
# Install tsx to run the server.ts directly if needed, or compile it
RUN npm install -g tsx

EXPOSE 3000
CMD ["tsx", "server.ts"]
