# **CRUD de usuários**

Neste repositório encontra-se um CRUD (create, read, update e delete) de usuários. Um usuário é formado pelo id, nome e senha. 
É utilizado MongoDB, para saber sobre a estrutura de dados veja a doc: 

## **Índice**

- [Descrição](#descrição)
- [Instalação](#instalação)
- [Recursos](#recursos)
- [Como Usar](#como-usar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Licença](#licença)

---

## **Descrição**

Este é um projeto Node.js que cria, lê, atualiza e deleta usuários que tem uma senha vinculada. 

### **Recursos**
- Criar usuário com senha
- Buscar todos os usuários do banco de dados
- Buscar um usuário específico pelo id
- Editar o nome, senha e/ou nickname de um usuário pelo id
- Deletar um usuário por id

### Regras de negócio

- Name, Password e Nickname são obrigatórios 
- Nickname é único e deve ter entre 4 e 64 caracteres
- Nome pode ter entre 4 e 255 caracteres
- Senha pode ter entre 6 e 18 caracteres
- id do usuário é criado automaticamente pelo serviço e é chave primária

---

## **Instalação**

### **Pré-requisitos**
Certifique-se de ter as seguintes ferramentas instaladas:
- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [npm](https://www.npmjs.com/)
- [postegreSQL](https://www.postgresql.org/download/)

### **Passos para instalação**
1. Clone o repositório:
   ```bash
   git clone https://github.com/ramattoso/CRUDUsuarios.git

   ```
2. Crie um arquivo doc/.env com os dados do banco de dados
   ```bash
   DB_USER = "USUÁRIO"
   DB_PASSWORD = "SUA SENHA"
   ```

### Estrutura de pastas:
   ```bash
   doc/
   ├── app.js
   ├── tests
   ├── src/         
       └── config/
       │   └── dbConfig.js
       │   └── dbConfig.sql
       ├── controllers/
       │   └── usersController.js
       ├── middleware/
       │   └── validations.js
       ├── models/
       │   └── User.js
       ├── routes/
       │   └── usersRoutes.js
       ├── schemas/
           └── schemasUsers.js 
   ```

### Utilizando a API

1. Na pasta doc dê o comando `npm run dev`
2. Para fazer as chamadas use a collection disponível em doc\CRUDUsers.postman_collection.

### Próximos passos
1. Testes unitários