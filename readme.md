# Demo RabbitMQ - Sistema de Mensageria

Aplicação exemplo demonstrando integração entre Frontend, Backend e RabbitMQ para mensageria assíncrona.

## 🚀 Tecnologias

- **Frontend:** React + TypeScript
- **Backend:** Node.js
- **Mensageria:** RabbitMQ
- **Containerização:** Docker

## 📋 Pré-requisitos

- Docker instalado

## 🔧 Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   

2. Backend
```bash

cd backend
docker compose up -d
```

3. Frontend 
```bash
cd frontend
docker compose up -d
```


4. Acesso
- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- RabbitMQ Management: http://localhost:15672
- Usuário: guest
- Senha: guest