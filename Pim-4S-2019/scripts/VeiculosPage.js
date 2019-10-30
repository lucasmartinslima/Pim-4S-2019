var vueVeiculos = new Vue({
  el: '#vueVeiculos',
  data: {
    dados: null,
    selecao: '',

    dadosVeiculo: {
      nome: null,
      tipo: null,
      placa: null,
      cor: null,
      disponibilidade: 1
  }
    
  },
  methods: {

    carregarVeiculos: function(){

        $.get("http://localhost:5050/api/veiculos", function(dado){
          vueVeiculos.dados = dado;
          console.log(dado)
        })  
    },
    salvarVeiculo: function(){

    this.dadosVeiculo.tipo = Number(this.dadosVeiculo.tipo);

      $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:5050/api/veiculo",
        contentType: "application/json",
        data: JSON.stringify(this.dadosVeiculo),
        success: function(data, textStatus){
          alert("Data: " + dataVeiculo + "\nStatus: " + status); 
        }
      });
    },

    excluirVeiculo: function(idExcluir){

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
          alert("Data: " + dataVeiculo + "\nStatus: " + status); 
        }
      });
    }
  }
})




function teste(){

  var dadosVeiculo2 = {
    id: 1,
    nome: "teste",
    tipo: 1,
    placa: "abc-123",
    cor: "preto",
    disponibilidade: 1
}


    var dataVeiculo = JSON.stringify(dadosVeiculo2);
    
    
    console.log(dataVeiculo)


      $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:5050/api/veiculo",
        contentType: "application/json",
        data: JSON.stringify(dadosVeiculo2),
        success: function(data, textStatus){
          alert("Data: " + dataVeiculo + "\nStatus: " + status); 
        }
      });



}


function closeModal(){
  var modal = document.getElementById('modal')
  modal.style.visibility = "hidden";
}

function openModal(){
  var modal = document.getElementById('modal')
  modal.style.visibility = "visible";
}




function inicializar(){

  vueVeiculos.carregarVeiculos()
  closeModal()

}
