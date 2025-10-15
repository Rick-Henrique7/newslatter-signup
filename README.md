# Newsletter Signup - Projeto de Estudo

Este é um projeto **iniciante** de backend em Node.js para cadastro de emails em uma lista do Mailchimp, utilizando Express. O objetivo é praticar conceitos básicos de servidores, rotas, integração com API externa e manipulação de formulários.

---
## Apresentação inicial

<img width="3713" height="1761" alt="image" src="https://github.com/user-attachments/assets/3258f92d-43b0-4852-8595-273f6baba304" />

## Caso email recusado

<img width="3711" height="1752" alt="image" src="https://github.com/user-attachments/assets/93165c26-0e27-4fb8-8114-d43b2ebe3c09" />

## Caso email aceito

<img width="3717" height="1764" alt="image" src="https://github.com/user-attachments/assets/3f3eb523-eeee-460a-8fa0-7be8e322ab1b" />



## Tecnologias Utilizadas

- **HTML**
- **JavaScript**
- **Node.js**  
- **Express**  
- **Mailchimp Marketing API**  
- **dotenv**  
- **Bootstrap** (para estilização do frontend)

---

## Dependências

As principais dependências do projeto são:

- [`express`](https://www.npmjs.com/package/express): Framework web para Node.js.
- [`@mailchimp/mailchimp_marketing`](https://www.npmjs.com/package/@mailchimp/mailchimp_marketing): SDK oficial do Mailchimp para integração com a API.
- [`dotenv`](https://www.npmjs.com/package/dotenv): Carrega variáveis de ambiente de um arquivo `.env`.
- [`body-parser`](https://www.npmjs.com/package/body-parser): Faz o parsing dos dados enviados via formulário (já incluso no Express 4.16+, mas usado aqui por compatibilidade).

---

## Como a aplicação funciona

1. **O usuário acessa a página inicial** (`/`), que exibe um formulário para inserir nome, sobrenome e email.
2. **Ao enviar o formulário**, os dados são enviados via POST para o servidor Express.
3. **O servidor processa os dados** e faz uma requisição para a API do Mailchimp, tentando adicionar o email à lista.
4. **Se o cadastro for bem-sucedido**, o usuário vê uma página de sucesso.
5. **Se houver erro** (ex: email já cadastrado), o usuário vê uma página de erro.

---

## Como rodar o projeto

1. **Clone o repositório**  
