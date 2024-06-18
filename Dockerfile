FROM node:21-slim

RUN apt update && apt install -y openssl procps
# Openssl é uma dependencia do Prisma
# procps é uma dependencia do linux para gerenciar os processos, sem ele nao tem como ficar reiniciando o servidor

RUN npm install -g @nestjs/cli@10.3.2

WORKDIR /home/node/app

USER node

CMD tail -f /dev/null