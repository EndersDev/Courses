# DevSuperior Project

Simple delivery 
Assets: https://github.com/devsuperior/sds2

[Entendendo o padrão DTO](https://medium.com/@msealvial/blindando-sua-api-spring-boot-com-o-padr%C3%A3o-dto-44f97020d1a0)

Technologies: Java, VSCode, RestClient, PostGreSQL

## Checklist
  * Setup inicial do projeto
     - [x] Dependências
     - [x] Arquivos .properties
     - [x]  Configuração de segurança
  * Modelo de domínio
     - [x] Entidades e relacionamentos
     - [x] Mapeamento objeto-relacional
     - [x] Seed
  * Criar endpoints (testes com RestClientExt .http )
     - [x] [GET] /products
     - [x] [GET] /orders
    -  [x] [POST] /orders
     - [x] [PUT] /orders/{id}/delivered
  * Validar perfil dev
     - [x] Base de dados Postgres local
     - [x] Testar todos endpoints
  * Preparar projeto para implantação
     - [x] Arquivo system.properties
     - [x] Profile prod -> commit
  * Implantar projeto no Heroku
     - [x] Criar app e provisionar Postgres
     - [x] Criar base de dados remota
     - [x] Executar comandos no Heroku CLI