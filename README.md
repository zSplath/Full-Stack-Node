# Fullstack Node + React: Livraria

Aplicação fullstack simples de uma livraria feita em formação na Alura: o usuário busca livros e monta sua lista de **favoritos**. O back-end é uma API em Node.js/Express que guarda os dados em arquivos JSON, e o front-end é feito em React.

| Pasta | Descrição | Tecnologias |
|---|---|---|
| [Back](Back) | API REST de livros e favoritos | Node.js, Express 5, CORS |
| [Front](Front) | Interface com busca de livros e página de favoritos | React 19, React Router, styled-components, Axios |

## Como rodar

São dois processos, um em cada terminal:

```bash
# Terminal 1: API (porta 8000)
cd Back
npm install
npx nodemon app.js

# Terminal 2: Front (porta 3000)
cd Front
npm install
npm start
```

Acesse `http://localhost:3000`. O front consome a API em `http://localhost:8000`, então ela precisa estar rodando.

## Testando

1. Na página inicial, digite o nome de um livro na busca.
2. Clique em um resultado para adicioná-lo aos favoritos.
3. Abra **Favoritos** no menu para ver a lista e remover itens.

Os detalhes de cada parte estão no README da respectiva pasta.
