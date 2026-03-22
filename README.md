# Backend Marketplace API

API desenvolvida em Node.js com TypeScript para gerenciamento de usuários, empresas, produtos e transações.

Este projeto foi desenvolvido como parte de um desafio técnico para backend.

---

# Tecnologias utilizadas

* Node.js
* TypeScript
* Express
* Prisma ORM
* PostgreSQL
* JWT (JSON Web Token)
* bcrypt
* Docker

---

# Arquitetura

O projeto segue uma arquitetura modular baseada em:

controllers → recebem requisições HTTP
services → lógica de negócio
middlewares → autenticação e autorização
routes → definição das rotas da API

Estrutura de pastas principal:

src/
modules/
usuarios/
controllers
services
auth/
products/
transactions/

database/
middlewares/
routes/
server.ts

---

# Instalação

Clone o repositório:

git clone https://github.com/Nicolas-P-S/knex-backend.git

Entre na pasta do projeto:

cd knex-backend/backend

Instale as dependências:

npm install

---

# Configuração do ambiente

Crie um arquivo `.env` na pasta `backend`.

Exemplo:

DATABASE_URL="postgresql://postgres:postgres@localhost:5433/knex-case"

JWT_SEGREDO=segredo

---

# Banco de dados

O projeto utiliza PostgreSQL.

Se estiver usando Docker:

docker run -d 
-p 5433:5432 
-e POSTGRES_PASSWORD=postgres 
-e POSTGRES_DB=knex-case 
postgres

Depois execute as migrations:

npx prisma migrate dev

Gerar client do Prisma:

npx prisma generate

Opcional: abrir interface visual do banco

npx prisma studio

---

# Rodando o servidor

npm run dev

Servidor iniciará em:

http://localhost:3000

---

# Autenticação

A API utiliza JWT.

Após realizar login, utilize o token nas rotas protegidas:

Authorization: Bearer TOKEN

---

# Endpoints

## Criar usuário

POST /users

Exemplo:

curl -X POST http://localhost:3000/users 
-H "Content-Type: application/json" 
-d '{
"nome":"Nicolas",
"email":"[nicolas@email.com](mailto:nicolas@email.com)",
"senha":"123456"
}'

---

## Login

POST /sessions

curl -X POST http://localhost:3000/sessions 
-H "Content-Type: application/json" 
-d '{"email":"[nicolas@email.com](mailto:nicolas@email.com)","senha":"123456"}'

Retorna:

{
"usuario": {...},
"token": "JWT_TOKEN"
}

---

## Criar produto

POST /products

curl -X POST http://localhost:3000/products 
-H "Authorization: Bearer TOKEN" 
-H "Content-Type: application/json" 
-d '{
"name":"iPhone 15",
"description":"Apple smartphone",
"price":9999
}'

---

## Listar produtos

GET /products

curl http://localhost:3000/products 
-H "Authorization: Bearer TOKEN"

---

## Atualizar produto

PUT /products/:id

---

## Deletar produto

DELETE /products/:id

---

## Criar transação (compra)

POST /transactions

curl -X POST http://localhost:3000/transactions 
-H "Authorization: Bearer TOKEN" 
-H "Content-Type: application/json" 
-d '{"productId":"ID_DO_PRODUTO"}'

---

# Modelagem do banco

User

* id
* name
* email
* password
* companyId

Company

* id
* name

Product

* id
* name
* description
* price
* companyId

Transaction

* id
* userId
* productId
* priceAtPurchase

---

# Regras de negócio

* Usuários pertencem a uma empresa
* Apenas usuários da mesma empresa podem criar ou editar produtos
* Usuários podem comprar produtos de qualquer empresa
* O preço da compra é salvo no momento da transação

---

# Autor

Nicolas Pereira de Souza
