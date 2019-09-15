# PIM 4.2019 - Sistema gerenciador de frotas

### Eclipse IDE for Java EE Developers 
Link pra baixar a IDE que está sendo usada no projeto
https://www.eclipse.org/downloads/packages/release/photon/r/eclipse-ide-java-ee-developers


### MySQl Server 5.7.27  
__(Na hora de instalar escolher a versão correta)__

https://dev.mysql.com/downloads/windows/installer/8.0.html




# API REST - 1001 Frotas
*API do projeto foi feita em Java utilizando o Framework Spring, ela será consumida pelo framework Jquery(JavaScript);*

_Para acessar a api é necessario ser esse link localhost:8080/api/{endpoint}_

## Veículos

| ENDPOINT  | Method | Params | Describe |
| --- | --- | --- | --- |
| /veiculos | `GET` | - | Retorna todos veículos |
| /veiculos/:id | `GET` | id | Retorna apenas dados de um veículo |
| /veiculo | `POST` | - | Registra um veículo |
| /veiculo | `DELETE` | - | Remove um veículo |
| /veiculo | `PUT` | - | Atualiza um veículo |

**Objeto que será feito para salvar, editar e excluir dados no banco.**
```code
//Veículos
[
 {
    "id": 5,
    "nome": "Palio Fiat",
    "tipo": 0,
    "placa": "485dasd5",
    "cor": null,
    "disponibilidade": "1"
  }
```


## Motorista

| ENDPOINT  | Method | Params | Describe |
| --- | --- | --- | --- |
| /motoristas | `GET` | - | Retorna todos motoristas |
| /motoristas/:id | `GET` | id | Retorna apenas dados de um motorista |
| /motorista | `POST` | - | Registra um motorista |
| /motorista | `DELETE` | - | Remove um motorista |
| /motorista | `PUT` | - | Atualiza um motorista |


```code
//Motoristas
  {
    "id": 20,
    "nome": "Lucas Martins de Lima",
    "cpf": "4225815688",
    "cnh": "16549653",
    "venc_cnh": "27/12/2025",
    "cel": "991471256",
    "disponibilidade": "1"
  }
```



## Viagem

| ENDPOINT  | Method | Params | Describe |
| --- | --- | --- | --- |
| /viagens | `GET` | - | Retorna todas as viagens |
| /viagens/:id | `GET` | id | Retorna apenas dados de uma viagem |
| /viagem | `POST` | - | Registra uma viagem |
| /viagem | `DELETE` | - | Remove uma viagem |
| /viagem | `PUT` | - | Atualiza uma viagem/ou finaliza |





```javascript
var teste = 'Testando'
console.log(teste)
```






