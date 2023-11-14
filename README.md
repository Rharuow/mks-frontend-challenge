# Diretrizes do desafio

O objetivo principal desse teste é avaliar sua capacidade de escrever código limpo, bem testado e reutilizável. Ao terminar, faça o deploy da aplicação e mande-nos o link.

## Tarefa (funcional)

Para esse desafio, você deve consumir nossa [API REST de produtos](https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api-docs/) para exibir a lista de produtos da loja.

A aplicação deve conter apenas uma página/rota e um carrinho.

- <b>Loja</b>: A lista de produtos deve ser buscada de nossa API, use um shimmer/skeleton enquanto estiver em loading.

- <b>Carrinho</b>: O carrinho deve conter todos os produtos selecionados, juntamente com a opção de aumentar a quantidade de cada produto selecionado.

Use do Jest e a testing-library para realizar os testes unitários.

## Recursos

UI/UX: [Figma loja](https://www.figma.com/file/Z4z8osDbK1ET7cjNzFRMrK/MKS-Front-end-challenge?node-id=0%3A1) PS: O design system está incluso, incluindo a fonte.

API: [API REST de produtos](https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api-docs/) para exibir a lista de produtos da loja.

## Ferramentas requeridas

1. TypeScript
2. React ou Next.js (Preferimos Next.js)
3. React-query
4. Styled-components
5. Jest

## Aspectos técnicos

Todas as ferramentas listadas anteriormente são mandatórias, além delas sinta-se livre para utilizar de qualquer outra technologia que te seja confortável.

## Faça o deploy!

Ao finalizar, faça o deploy no lugar que te for confortável (exemplo: Vercel, Netlify, Heroku, Amazon EC2, App Runner, etc)

# GETTING STARTED

## Clone this project

```bash
git clone git@github.com:Rharuow/mks-frontend-challenge.git && cd ./mks-frontend-challenge && npm i
```

## ENV

NEXT_PUBLIC_API_URL=https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/

HOST_URL=http://localhost:3000

> **_NOTE:_** before run this project, create account at <a href="https://stripe.com/br">STRIPE</a>, and after that, get the NEXT_PUBLIC_STRIPE_PUBLIC_KEY, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SCRETE_KEY.

## Language, frameworks, libs and tools

- Language:
  - Typescript
- Framework:
  - Nextjs
  - Tailwind
- Libs:
  - ReactJs
  - Styled Components
  - Jest
  - @tanstack/react-query
  - Axios
  - react-loading-skeleton
  - Stripe
- Tool:
  - Github

## Link to see this project in production

<a href="">MKS FRONTEND TEST</a>

## About validation

This project was developed using git verionamentions Semantic Commit Messages. Each branch was a feature for this project and they were keeped in the repository, While the branch to fix bugs was merged and deleted. Soon, the differents merged points showed the evolution of this project. Thanks for take this into account in the assessment.
