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


## Veiculos

| ENDPOINT  | Method | Params | Describe |
| --- | --- | --- | --- |
| /veiculos | `GET` | - | Retorna todos veículos |
| /veiculos/:id | `GET` | id | Retorna apenas dado de um veículo |
| /veiculo | `POST` | - | Registra um veículo |
| /veiculo | `DELETE` | - | Remove um veículo |
