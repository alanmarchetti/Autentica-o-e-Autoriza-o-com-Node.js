# Autenticação e Autorização com Node.js


## Descrição do Projeto
Desenvolvimento de uma API de para fins de cadastro e login de usuários e envio de emails. Onde o usuário sṕ podera acessar determinadas rotas, caso seja autenticado no sistema. O processo de autenticação e autorização foi implementado com o JsonWebToken (JWT). Para o sistema e login, cadastro e listagem de usuário, foi utilizado o MongoDB. Para os serviços de email foi utilizado o 'MailTrap'. 

### Tecnologias e recursos utilizados
- Typescript
- Node.js
- Express
- MongoDB (mongoose)
- Mailtrap
- nodemailer
- JsonWebToken (JWT)
- Bycriptjs
- Cors
- REST

### Para utilizar o projeto
- Clonar o repositório
- Executar o comando  `npm i`  para instalar as dependecias
- Fazer uma cópia do arquivo `.env.example` e chamar de `.env`
- Atualizar variáveis de ambiente no arquivo `.env`
- Executar o comando `npm start` para rodar o servidor
- Utilize o `Postman`, `Insomnia`, ou similares para realizar as requisições
- Necessita que o typescript e um acesso ao MongoDB para utilizar corretamente este projeto

### Algumas regras de negócio
- Não será permitido o cadastro de emails iguais
- Só será permitido o acesso a determinada rotam, após autenticaçao e autorização.






