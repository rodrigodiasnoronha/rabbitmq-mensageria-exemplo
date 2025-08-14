# Demo RabbitMQ - Sistema de Mensageria

Aplicação exemplo demonstrando integração entre Frontend, Backend e RabbitMQ para mensageria assíncrona.

## 🚀 Tecnologias

- **Frontend:** React + JavaScript
- **Backend:** Node.js
- **Mensageria:** RabbitMQ
- **Containerização:** Docker

## 📋 Pré-requisitos

- Docker instalado

## 🔧 Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone git@github.com:rodrigodiasnoronha/rabbitmq-mensageria-exemplo.git
   ```

2. **Backend**
    ```bash
    
    cd backend
    docker compose up -d
    ```

3. **Frontend**
    ```bash
    cd frontend
    docker compose up -d
    ```


## 🏗️ Acesso
- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- RabbitMQ Management: http://localhost:15672
- Usuário: guest
- Senha: guest