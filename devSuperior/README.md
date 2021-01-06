# DevSuperior Project

Simple delivery 
Assets: https://github.com/devsuperior/sds2

[Entendendo o padrão DTO](https://medium.com/@msealvial/blindando-sua-api-spring-boot-com-o-padr%C3%A3o-dto-44f97020d1a0)

## Checklist
  * Setup inicial do projeto
     - [x] Dependências
     - [x] Arquivos .properties
     - [x]  Configuração de segurança
  * Modelo de domínio
     - [x] Entidades e relacionamentos
     - [x] Mapeamento objeto-relacional
     - [x] Seed
  * Criar endpoints
     - [x] [GET] /products
     - [ ] [GET] /orders
    -  [ ] [POST] /orders
     - [ ] [PUT] /orders/{id}/delivered
  * Validar perfil dev
     - [ ] Base de dados Postgres local
     - [ ] Testar todos endpoints
  * Preparar projeto para implantação
     - [ ] Arquivo system.properties
     - [ ] Profile prod -> commit
  * Implantar projeto no Heroku
     - [ ] Criar app e provisionar Postgres
     - [ ] Criar base de dados remota
     - [ ] Executar comandos no Heroku CLI