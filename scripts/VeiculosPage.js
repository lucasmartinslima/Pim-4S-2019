var vueVeiculos = new Vue({
  el: '#vueVeiculos',
  data: {
    //dados: null,
    selecao: '',
    dadosVeiculo: {
      nome: null,
      tipo: null,
      placa: null,
      cor: null,
      disponibilidade: 1
    },
    
    // Array de objeto para teste, caso não tenha a api funcionando
    dados: [
    {id: 1, nome: 'Carro 1',tipo: 1,placa: 'null',cor: 'cinza',disponibilidade: 1},
    {id: 2, nome: 'Carro 2',tipo: 1,placa: 'null',cor: 'cinza',disponibilidade: 1},
    {id: 3, nome: 'Carro 3',tipo: 1,placa: 'null',cor: 'cinza',disponibilidade: 1},
    {id: 4, nome: 'Carro 4',tipo: 1,placa: 'null',cor: 'cinza',disponibilidade: 1},
    {id: 4, nome: 'Carro 4',tipo: 1,placa: 'null',cor: 'cinza',disponibilidade: 1},
    {id: 4, nome: 'Carro 4',tipo: 1,placa: 'null',cor: 'cinza',disponibilidade: 1},
    {id: 4, nome: 'Carro 4',tipo: 1,placa: 'null',cor: 'cinza',disponibilidade: 1}]
 




  },
  methods: {

    carregarVeiculos: function(){

      $.get("http://localhost:5050/api/veiculos", function(dado){
        vueVeiculos.dados = dado;
        console.log(dado)
      })  
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
     }); 

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
}

function openModal(){
  var modal = document.getElementById('modal')
  modal.style.visibility = "visible";
}

function inicializar(){
  closeModal()
  vueVeiculos.carregarVeiculos()
}
