# Pim-4S-2019

### Eclipse IDE for Java EE Developers 
Link pra baixar a IDE que está sendo usada no projeto
https://www.eclipse.org/downloads/packages/release/photon/r/eclipse-ide-java-ee-developers


### MySQl Server 5.7.27  - Na hora de instalar escolher a versão correta
https://dev.mysql.com/downloads/windows/installer/8.0.html


Caso de erro na hora de executar o projeto no Eclipse, setar o horário no Server MySql.

COMANDO: *SET GLOBAL time_zone = '+4:00'; 

# API REST - 1001 Frotas
*API do projeto foi feita em Java utilizando o Framework Spring, ela será consumida pelo framework Jquery(JavaScript);*


## Veículos

| ENDPOINT  | Method | Params | Describe |
| --- | --- | --- | --- |
| /veiculos | `GET` | - | Retorna todos veículos |
| /veiculos/:id | `GET` | id | Retorna apenas dados de um veículo |
| /veiculo | `POST` | - | Registra um veículo |
| /veiculo | `DELETE` | - | Remove um veículo |
| /veiculo | `UPDATE` | - | Atualiza um veículo |


## Motorista

| ENDPOINT  | Method | Params | Describe |
| --- | --- | --- | --- |
| /motoristas | `GET` | - | Retorna todos motoristas |
| /motoristas/:id | `GET` | id | Retorna apenas dados de um motorista |
| /motorista | `POST` | - | Registra um motorista |
| /motorista | `DELETE` | - | Remove um motorista |


## Viagem

| ENDPOINT  | Method | Params | Describe |
| --- | --- | --- | --- |
| /viagens | `GET` | - | Retorna todas as viagens |
| /viagens/:id | `GET` | id | Retorna apenas dados de uma viagem |
| /viagem | `POST` | - | Registra uma viagem |
| /viagem | `DELETE` | - | Remove uma viagem |

```javascript
var teste = 'Testando'
console.log(teste)
```

```php
var teste = 'Testando'
console.log(teste)
```



