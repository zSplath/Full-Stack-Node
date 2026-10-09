# Livraria: Front-end

Interface em React da livraria, criada com Create React App. Consome a [API do back-end](../Back) para buscar livros e gerenciar favoritos.

## Funcionalidades

- **Página inicial (`/`)**: busca de livros (clique em um resultado para favoritar) e últimos lançamentos
- **Favoritos (`/favoritos`)**: lista dos livros favoritados, com opção de remover
- Componentes estilizados com styled-components
- Navegação com React Router

## Tecnologias

- React 19
- React Router 7
- styled-components
- Axios
- Testing Library / Jest

## Como rodar

O back-end precisa estar rodando em `http://localhost:8000` (veja [Back](../Back)).

```bash
npm install
npm start
```

Acesse `http://localhost:3000`.

## Outros scripts

| Comando | Descrição |
|---|---|
| `npm test` | Roda os testes em modo interativo |
| `npm run build` | Gera a versão de produção na pasta `build/` |
