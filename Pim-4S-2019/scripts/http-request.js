var vueVeiculos = new Vue({
  el: '#vueVeiculos',
  data: {
    dados: null,
    selecao: ''
  },
  methods: {
    say: function (id) {
      alert('Voce quer excluir o item com o id: '+id+'???')
    }
  }
})



// RETORNARA UM ARRAY DE JSON DOS VEICULOS
function carregarVeiculos(){
  $.get("http://localhost:5050/api/veiculos", function(dado){
    vueVeiculos.dados = dado;
    console.log(dado)
  })  
}

function pegarDadosVeiculo(){




}



function salvarDado(veiculo){


}






var btn = document.getElementById('a');
btn.addEventListener('click', function(){

	$.get("http://localhost:8080/api/veiculos", function(dado){

    vueVeiculos.dados = dado;
    console.log(dado)
  })
})




var btn = document.getElementById('b');
btn.addEventListener('click', function(){

  var data2 = {
    nome: 'Teste Carro',
    placa: 'ABC-1234'
  }

  var dataW = JSON.stringify(data2);


  $.ajax({
    type: "post",
    dataType: "json",
    url: "http://localhost:8080/api/veiculo",
    contentType: "application/json",
    data: JSON.stringify(data2),
    success: function(data, textStatus){
      alert("Data: " + data2 + "\nStatus: " + status); 
    }
  });







})


