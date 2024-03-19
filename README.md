# To-Do List Serverless API

Esta é uma API serverless simples para gerenciar uma lista de tarefas (to-do list), construída usando AWS Lambda, API Gateway e DynamoDB.

## Pré-requisitos

- Node.js e npm instalados localmente
- Conta na AWS com permissões para criar recursos como funções Lambda, API Gateway e DynamoDB

## Configuração do Ambiente

1. Clone este repositório para o seu ambiente local:

   ```
   git clone https://github.com/karGuimaraes/to-do-list-serverless.git
   ```

2. Instale as dependências do projeto usando npm:

   ```
   cd to-do-list-serverless
   npm install
   ```

3. Criar tabela DynamoDB:
Na AWS crie uma tabela no DynamoDB chamada `Tasks` com uma chave primária `taskId` do tipo string.

4. Na AWS, crie uma nova API Gateway e configure os endpoints para cada função Lambda correspondente.

## Configuração da AWS

Antes de implantar a aplicação na AWS, você precisará configurar as suas credenciais AWS localmente. Você pode fazer isso executando o comando `aws configure` e fornecer suas credenciais.

## Implantação

Para fazer o deploy na AWS, execute o seguinte comando:

```
npm run deploy
```
