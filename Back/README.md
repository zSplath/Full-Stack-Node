# Livraria: Back-end

API REST em Node.js e Express que gerencia **livros** e **favoritos**. Os dados ficam em arquivos JSON na pasta `DataBase/`, sem precisar de banco de dados. A estrutura é dividida em `Router`, `Controller` e `Services`.

## Tecnologias

- Node.js (CommonJS)
- Express 5
- CORS
- nodemon

## Como rodar

```bash
npm install
npx nodemon app.js   # ou: node app.js
```

Rode o comando **de dentro da pasta `Back`**, porque os caminhos dos arquivos JSON são relativos a ela. A API sobe em `http://localhost:8000`.

## Rotas

| Método | Rota | Descrição |
|---|---|---|
| GET | `/books` | Lista os livros |
| GET | `/books/:id` | Busca um livro |
| POST | `/books` | Cadastra um livro (`{ "id": "10", "nome": "..." }`) |
| PATCH | `/books/:id` | Atualiza um livro |
| DELETE | `/books/:id` | Remove um livro |
| GET | `/favorites` | Lista os favoritos |
| GET | `/favorites/:id` | Busca um favorito |
| POST | `/favorites/:id` | Adiciona o livro `:id` aos favoritos |
| PATCH | `/favorites/:id` | Atualiza um favorito |
| DELETE | `/favorites/:id` | Remove dos favoritos |

## Testando

```bash
curl http://localhost:8000/books
curl -X POST http://localhost:8000/favorites/4
curl http://localhost:8000/favorites
curl -X DELETE http://localhost:8000/favorites/4
```
