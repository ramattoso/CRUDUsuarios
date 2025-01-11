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

- Nickname é único e deve ter no máximo 64 caracteres
- Nome pode ter até 255 caracteres
- Senha pode ter até 64 caracteres
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

### Próximos passos
1. Melhorar validações
2. Fazer enum de erros
3. Testes unitários