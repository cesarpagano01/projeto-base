# Utilizando alpine para manter a imagem leve
FROM node:25-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia arquivos de dependências primeiro (otimiza o cache de camadas)
COPY package*.json yarn.lock* ./

RUN yarn install

# Copia o restante do código
COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
