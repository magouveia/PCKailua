FROM node:22-alpine

# Definir o diretório de trabalho dentro do contentor
WORKDIR /app

# Copiar os ficheiros de dependências
COPY package*.json ./

# Instalar todas as dependências (incluindo as de desenvolvimento para o build e tsx)
RUN npm install

# Copiar o resto do código da aplicação
COPY . .

# Fazer o build da interface React (Vite)
RUN npm run build

# Expor a porta que o servidor Express usa
EXPOSE 3000

# Definir variáveis de ambiente padrão
ENV NODE_ENV=production
ENV PORT=3000

# Iniciar o servidor
CMD ["npx", "tsx", "server.ts"]
