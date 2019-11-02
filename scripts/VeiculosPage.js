var vueVeiculos = new Vue({
  el: '#vueVeiculos',
  data: {
    dados: null,    // AO USAR A API DESCOMENTAR ESSA LINHA
    selecao: '',
    dadosVeiculo: {
      nome: null,
      tipo: null,
      placa: null,
      cor: null,
      disponibilidade: 1
    },
    userSession:{
      nome: null,
      email: null,
      cel: null
    },
    
//Array de objeto para teste, caso não tenha a api funcionando, caso tenha a api favor descomentar 'dados' de cima
 /*   dados: [
    {id: 1, nome: 'Carro 1',tipo: 1,placa: 'null',cor: 'cinza',disponibilidade: 1},
    {id: 2, nome: 'Carro 2',tipo: 1,placa: 'null',cor: 'cinza',disponibilidade: 1},
    {id: 3, nome: 'Carro 3',tipo: 1,placa: 'null',cor: 'cinza',disponibilidade: 1},
    {id: 4, nome: 'Carro 4',tipo: 1,placa: 'null',cor: 'cinza',disponibilidade: 1},
    {id: 4, nome: 'Carro 4',tipo: 1,placa: 'null',cor: 'cinza',disponibilidade: 1},
    {id: 4, nome: 'Carro 4',tipo: 1,placa: 'null',cor: 'cinza',disponibilidade: 1},
    {id: 4, nome: 'Carro 4',tipo: 1,placa: 'null',cor: 'cinza',disponibilidade: 1}],
*/
    modalTitle: 'Registrar'

  },
  methods: {

    carregarVeiculos: function(){

      loadOn()
      $.get("http://localhost:5050/api/veiculos", function(dado){
        
        vueVeiculos.dados = dado;
        console.log(dado)
      }).done(()=>{loadOff()})
    
    },

    editarVeiculo: function(idEditar){
  
      var veiculoEditar =null;
      console.log(idEditar)
      for(i=0;i<5;i++){
        if(this.dados[i].id == idEditar){
          veiculoEditar = this.dados[i]

          console.log(veiculoEditar)

          this.dadosVeiculo.id = veiculoEditar.id;
          this.dadosVeiculo.nome = veiculoEditar.nome;
          this.dadosVeiculo.tipo = veiculoEditar.tipo;
          this.dadosVeiculo.placa = veiculoEditar.placa;
          this.dadosVeiculo.cor = veiculoEditar.cor;

          openModal()
          break;
        }
      }
   
      $.ajax({
       type: "PUT",
       dataType: "json",
       url: "http://localhost:5050/api/veiculo",
       contentType: "application/json",
       data: JSON.stringify(this.dadosVeiculo),
       success: function(data, textStatus){
         console.log("Veiculo excluido")
       }
     });
    },

    salvarVeiculo: function(){

      loadOn()
      this.dadosVeiculo.tipo = Number(this.dadosVeiculo.tipo);

      $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:5050/api/veiculo",
        contentType: "application/json",
        data: JSON.stringify(this.dadosVeiculo),
        success: function(data, textStatus){
         console.log("Veiculo adicionado"+ this.dadosVeiculo)
       }
     }).done(()=>{   loadOff(); inicializar()}); 

      this.dadosVeiculo.nome = null
      this.dadosVeiculo.tipo = null
      this.dadosVeiculo.placa = null
      this.dadosVeiculo.cor = null
      this.dadosVeiculo.disponibilidade = 1

    },

    excluirVeiculo: function(idExcluir){
     var veiculoExcluir =null;
     console.log(idExcluir)
     for(i=0;i<5;i++){
      if(this.dados[i].id == idExcluir){
        veiculoExcluir = this.dados[i]
        break;
      }
    }
    $.ajax({
      type: "DELETE",
      dataType: "json",
      url: "http://localhost:5050/api/veiculo",
      contentType: "application/json",
      data: JSON.stringify(veiculoExcluir),
      success: function(data, textStatus){
        console.log("Veiculo excluido")
      }
    });
  }
}
})

function closeModal(){
  var modal = document.getElementById('modal')
  modal.style.visibility = "hidden";

  var backModal = document.getElementById('backModal')
  backModal.style.visibility = "hidden";


      vueVeiculos.dadosVeiculo.nome = null
      vueVeiculos.dadosVeiculo.tipo = null
      vueVeiculos.dadosVeiculo.placa = null
      vueVeiculos.dadosVeiculo.cor = null
      vueVeiculos.dadosVeiculo.disponibilidade = 1


}

function openModal(){
  var modal = document.getElementById('modal')
  modal.style.visibility = "visible";

  var backModal = document.getElementById('backModal')
  backModal.style.visibility = "visible";
}

function inicializar(){
  closeModal()
  vueVeiculos.carregarVeiculos()

var nomeUsuario = document.getElementById("nomeUsuario")


if(localStorage.getItem("userSession")){
  sessionObj = JSON.parse(localStorage.getItem("userSession"))

  vueVeiculos.userSession.nome = sessionObj.nome
  vueVeiculos.userSession.email = sessionObj.email
  vueVeiculos.userSession.cel = sessionObj.cel
  vueVeiculos.userSession.cpf= sessionObj.cpf
  
  nomeUsuario.innerHTML = vueVeiculos.userSession.nome

}else{
  console.log("não existe nada")
}


}


