
# Sistema de Gerenciamento de Itens

Este projeto é um sistema completo de gerenciamento de produtos, desenvolvido com **Node.js** e **Express** no backend, e um frontend construído com **React**. Ele oferece uma API RESTful com endpoints para operações CRUD (Create, Read, Update, Delete) de produtos, além de uma interface gráfica para interação com o sistema.

---

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Endpoints da API](#endpoints-da-api)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

---
## Screenshots

![alt text](doc/home.PNG)

![alt text](doc/get1.PNG)
![alt text](doc/get2.PNG)
![alt text](doc/get3.PNG)
![alt text](doc/post.PNG)
![alt text](doc/put.PNG)
![alt text](doc/delet.PNG)

## Tecnologias Utilizadas

### Backend
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção da API RESTful.

### Frontend
- **Vite**: Ferramenta de build rápida para desenvolvimento moderno.
- **React**: Biblioteca para construção da interface do usuário.
- **Zustand**: Gerenciamento de estado global.
- **Chakra-UI**: Biblioteca de componentes UI para estilização.

### Banco de Dados
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.

---

## Instalação e Execução

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Clone o repositório

```bash
git clone https://github.com/Guisandroni/market-Itens.git
```

### 2. Navegue até o diretório do projeto

```bash
cd market-Itens
```

### 3. Instale as dependências do backend e frontend

No diretório raiz do projeto, instale as dependências do backend:

```bash
npm install
```

Em seguida, navegue até o diretório do frontend e instale as dependências:

```bash
cd frontend
npm install
```

### 4. Execute o backend

No diretório raiz, inicie o servidor backend:

```bash
npm run start
```

O servidor estará disponível em:  
[http://localhost:2000](http://localhost:2000)

### 5. Execute o frontend

No diretório `frontend`, inicie o servidor de desenvolvimento do Vite:

```bash
npm run dev
```

O frontend estará disponível em:  
[http://localhost:3000](http://localhost:3000)

---

## Endpoints da API

A API oferece os seguintes endpoints para operações CRUD:

### 1. **Criar um produto**
- **Método:** `POST`
- **Endpoint:** `/products`
- **Corpo da Requisição (JSON):**
  ```json
  {
    "name": "Nome do Produto",
    "description": "Descrição do Produto",
    "price": 99.99,
    "quantity": 10
  }
  ```

### 2. **Listar todos os produtos**
- **Método:** `GET`
- **Endpoint:** `/products`

### 3. **Obter um produto específico**
- **Método:** `GET`
- **Endpoint:** `/products/:id`

### 4. **Editar um produto**
- **Método:** `PUT`
- **Endpoint:** `/products/:id`
- **Corpo da Requisição (JSON):**
  ```json
  {
    "name": "Novo Nome",
    "description": "Nova Descrição",
    "price": 149.99,
    "quantity": 5
  }
  ```

### 5. **Deletar um produto**
- **Método:** `DELETE`
- **Endpoint:** `/products/:id`

---

## Estrutura do Projeto

```
market-Itens/
├── backend/               # Código do backend (Node.js + Express)
│   ├── controllers/       # Lógica dos endpoints
│   ├── routes/            # Definição das rotas
│   ├── models/            # Modelos de dados (MongoDB)
│   | 
│   └── server.js          # Configuração do express e dotenv
│
├── frontend/              # Código do frontend (Vite + React)
│   ├── src/               # Código-fonte do frontend
│   │   ├── components/    # Componentes React
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── store/         # Chamadas à API (Zustand)
│   │   └── App.jsx        # Componente principal
│   └── vite.config.js     # Configuração do Vite
│
├── README.md              # Documentação do projeto
└── package.json           # Dependências e scripts do projeto
```

---

## Licença

Este projeto está licenciado sob a **Licença MIT**. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

---

## Contato

Se você tiver dúvidas, sugestões ou quiser entrar em contato, sinta-se à vontade para me encontrar em:

- **GitHub:** [Guisandroni](https://github.com/Guisandroni)
- **Email:**  gui.sandroni@gmail.com
- **LinkedIn:** [Seu Nome](https://www.linkedin.com/in/guisandroni) (opcional)

