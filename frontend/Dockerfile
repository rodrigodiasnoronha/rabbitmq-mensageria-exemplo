FROM node:22.0.0-alpine

# Diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY /package*.json ./

# Instala dependências
RUN npm install

# Copia todo o código
COPY . .

# Expoe porta do CRA
EXPOSE 3000

# Comando padrão (desenvolvimento)
CMD ["npm", "start"]
