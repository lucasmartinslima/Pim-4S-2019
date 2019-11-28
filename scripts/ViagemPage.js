var vueViagem = new Vue({
  el: '#vueViagem',
  data: {
    dados: null,    // AO USAR A API DESCOMENTAR ESSA LINHA

    dadoMotoristasDisps: null,
    dadoVeiculoDisps: null,
    idMotoristaSelect: 1,
    idVeiculoSelect: 3,

    veiculosAtt: null,
    motoristasAtt: null,

    selecao: '',
    dadosViagem: {
      statusViagem: null,
      cep: null,
      diaInicio: null,
      mesInicio: null,
      anoInicio: null,
      diaFim: null,
      mesFim: null,
      anoFim: null,
      idVeiculo: null,
      idMotorista: null
    },
    userSession: {
      nome: null,
      email: null,
      cel: null
    },
    modalTitle: 'Registrar',
    inputBusca: null,
    selectBusca: 4,
    vm: this

  },
  methods: {

    carregarNomeOuPlaca: function () {

      loadOn()
      if (this.inputBusca && this.selectBusca != 4) {
        $.get("http://localhost:5050/api/motoristas/?nome=" + this.inputBusca + "&cpf=" + this.inputBusca + "&disp=" + this.selectBusca, function (dado) {
          vueViagem.dados = dado;
          console.log(dado)
        }).done(() => { loadOff() })
      } else if (this.selectBusca != 4) {
        $.get("http://localhost:5050/api/motoristas/disp?disp=" + this.selectBusca, function (dado) {
          vueViagem.dados = dado;
          console.log(dado)
        }).done(() => { loadOff() })
      } else if (this.inputBusca && this.selectBusca == 4) {
        $.get("http://localhost:5050/api/motoristas/nomeCpf?nome=" + this.inputBusca + "&cpf=" + this.inputBusca, function (dado) {
          vueViagem.dados = dado;
          console.log(dado)
        }).done(() => { loadOff() })
      } else if (this.selectBusca == 4) {
        inicializar()
      }


    },

    carregarViagens: function () {

      loadOn()
      $.get("http://localhost:5050/api/viagens", function (dado) {

        vueViagem.dados = dado;
        console.log(dado)
      }).done(() => { loadOff() })

    },

    carregarMotoristas: function () {

      loadOn()
      $.get("http://localhost:5050/api/motoristas/disp?disp=1", function (dado) {

        vueViagem.dadoMotoristasDisps = dado;
        console.log(dado)
      }).done(() => { loadOff() })

    },

    carregarVeiculos: function () {

      loadOn()
      $.get("http://localhost:5050/api/veiculos/disp?disp=1", function (dado) {

        vueViagem.dadoVeiculoDisps = dado;
        console.log(dado)
      }).done(() => { loadOff() })

    },
    carregarTodosVeiculos: function(){
      $.get("http://localhost:5050/api/veiculos", function (dado) {

        vueViagem.veiculosAtt = dado;
        console.log(dado)
      }).done(() => { loadOff() })

    },
     carregarTodosMotoristas: function(){
      $.get("http://localhost:5050/api/motoristas", function (dado) {

        vueViagem.motoristasAtt = dado;
        console.log(dado)
      }).done(() => { loadOff() })

    },


    editarViagem: function (idEditar) {

      var viagemEditar = null;
      console.log(idEditar)
      for (i = 0; i < this.dados.length; i++) {
        if (this.dados[i].id == idEditar) {
          viagemEditar = this.dados[i]

          console.log(viagemEditar)

          this.dadosViagem.id = viagemEditar.id
          this.dadosViagem.statusViagem = viagemEditar.statusViagem
          this.dadosViagem.cep = viagemEditar.cep
          this.dadosViagem.diaInicio = viagemEditar.diaInicio
          this.dadosViagem.mesInicio = viagemEditar.mesInicio
          this.dadosViagem.anoInicio = viagemEditar.anoInicio
          this.dadosViagem.diaFim = viagemEditar.diaFim
          this.dadosViagem.mesFim = viagemEditar.mesFim
          this.dadosViagem.anoFim = viagemEditar.anoFim
          this.dadosViagem.idVeiculo = viagemEditar.idVeiculo
          this.dadosViagem.idMotorista = viagemEditar.idMotorista

          openModal()
          break;
        }
      }

      $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:5050/api/viagem",
        contentType: "application/json",
        data: JSON.stringify(this.dadosViagem),
        success: function (data, textStatus) {
          console.log("Veiculo editado")
        }
      });
    },

    salvarViagem: function () {

      loadOn()

      this.dadosViagem.idVeiculo = this.idVeiculoSelect
      this.dadosViagem.idMotorista = this.idMotoristaSelect

      for (i = 0; i < vueViagem.dadoMotoristasDisps.length; i++) {
        if (vueViagem.dadoMotoristasDisps[i].id == this.dadosViagem.idMotorista) {
          var dadosMotorista = {
            id: vueViagem.dadoMotoristasDisps[i].id,
            nome: vueViagem.dadoMotoristasDisps[i].nome,
            cpf: vueViagem.dadoMotoristasDisps[i].cpf,
            cnh: vueViagem.dadoMotoristasDisps[i].cnh,
            venc_cnh: vueViagem.dadoMotoristasDisps[i].cnh,
            cel: vueViagem.dadoMotoristasDisps[i].cel,
            disponibilidade: 0
          }
          break;
        }
      }
      $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:5050/api/motorista",
        contentType: "application/json",
        data: JSON.stringify(dadosMotorista),
        success: function (data, textStatus) {
          console.log("Motorisa status alterado" + dadosMotorista)
        }
      }).done(() => { loadOff(); inicializar(); }).fail(() => { alert("Item não adicionado, favor verificar a sua conexão!") });


      for (i = 0; i < vueViagem.dadoVeiculoDisps.length; i++) {
        if (vueViagem.dadoVeiculoDisps[i].id == this.dadosViagem.idVeiculo) {
          var dadosVeiculo = {
            id: vueViagem.dadoVeiculoDisps[i].id,
            nome: vueViagem.dadoVeiculoDisps[i].nome,
            tipo: vueViagem.dadoVeiculoDisps[i].tipo,
            placa: vueViagem.dadoVeiculoDisps[i].placa,
            cor: vueViagem.dadoVeiculoDisps[i].cor,
            disponibilidade: 2
          }
          break;
        }
      }
      $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:5050/api/veiculo",
        contentType: "application/json",
        data: JSON.stringify(dadosVeiculo),
        success: function (data, textStatus) {
          console.log("Motorisa status alterado" + dadosVeiculo)
        }
      }).done(() => { loadOff(); inicializar(); }).fail(() => { alert("Item não adicionado, favor verificar a sua conexão!") });


      $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:5050/api/viagem",
        contentType: "application/json",
        data: JSON.stringify(this.dadosViagem),
        success: function (data, textStatus) {
          console.log("Veiculo adicionado" + this.dadosViagem)
        }
      }).done(() => { loadOff(); inicializar(); }).fail(() => { alert("Item não adicionado, favor verificar a sua conexão!") });


      this.dadosViagem.statusViagem = '1'
      this.dadosViagem.cep = null
      this.dadosViagem.diaInicio = null
      this.dadosViagem.mesInicio = null
      this.dadosViagem.anoInicio = null
      this.dadosViagem.diaFim = null
      this.dadosViagem.mesFim = null
      this.dadosViagem.anoFim = null
      this.dadosViagem.idVeiculo = null
      this.dadosViagem.idMotorista = null




    }, finalizarViagem: function (idViagem, idVeiculo, idMotorista) {



      var viagemEditar = null;
      console.log(idViagem)
      for (i = 0; i < this.dados.length; i++) {
        if (this.dados[i].id == idViagem) {
          viagemEditar = this.dados[i]

          console.log(viagemEditar)

          this.dadosViagem.id = viagemEditar.id
          this.dadosViagem.statusViagem = '2'
          this.dadosViagem.cep = viagemEditar.cep
          this.dadosViagem.diaInicio = viagemEditar.diaInicio
          this.dadosViagem.mesInicio = viagemEditar.mesInicio
          this.dadosViagem.anoInicio = viagemEditar.anoInicio
          this.dadosViagem.diaFim = viagemEditar.diaFim
          this.dadosViagem.mesFim = viagemEditar.mesFim
          this.dadosViagem.anoFim = viagemEditar.anoFim
          this.dadosViagem.idVeiculo = viagemEditar.idVeiculo
          this.dadosViagem.idMotorista = viagemEditar.idMotorista

          break;
        }
      }

      $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:5050/api/viagem",
        contentType: "application/json",
        data: JSON.stringify(this.dadosViagem),
        success: function (data, textStatus) {
          console.log("Veiculo editado")
          loadOff(); inicializar();
        }
      });


      // ATUALIZAR VEICULO
  
      for (i = 0; i < vueViagem.veiculosAtt.length; i++) {
        if (vueViagem.veiculosAtt[i].id == idVeiculo) {
          var dadosVeiculo = {
            id: vueViagem.veiculosAtt[i].id,
            nome: vueViagem.veiculosAtt[i].nome,
            tipo: vueViagem.veiculosAtt[i].tipo,
            placa: vueViagem.veiculosAtt[i].placa,
            cor: vueViagem.veiculosAtt[i].cor,
            disponibilidade: 1
          }
          console.log('DADOS VEICULOS' + this.dadosVeiculo)
          break;

        }
      }
      $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:5050/api/veiculo",
        contentType: "application/json",
        data: JSON.stringify(dadosVeiculo),
        success: function (data, textStatus) {
          console.log("Motorisa status alterado" + this.dadosVeiculo)
        }
      }).done(() => { loadOff(); inicializar(); }).fail(() => { alert("Item não adicionado, favor verificar a sua conexão!") });

      
      //ATUALIZAR MOTORISTA
      for (i = 0; i < vueViagem.motoristasAtt.length; i++) {
        if (vueViagem.motoristasAtt[i].id == idMotorista) {
          var dadosMotorista = {
            id: vueViagem.motoristasAtt[i].id,
            nome: vueViagem.motoristasAtt[i].nome,
            cpf: vueViagem.motoristasAtt[i].cpf,
            cnh: vueViagem.motoristasAtt[i].cnh,
            venc_cnh: vueViagem.motoristasAtt[i].cnh,
            cel: vueViagem.motoristasAtt[i].cel,
            disponibilidade: 1
          }
          break;
        }
      }

      console.log("DADOS MOTOISTA"+this.dadosMotorista)
      $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:5050/api/motorista",
        contentType: "application/json",
        data: JSON.stringify(dadosMotorista),
        success: function (data, textStatus) {
          console.log("Motorisa status alterado" + dadosMotorista)
        }
      }).done(() => { loadOff(); inicializar(); }).fail(() => { alert("Item não adicionado, favor verificar a sua conexão!") });



    },



    excluirViagem: function (idExcluir, idVeiculo, idMotorista) {
      loadOn()

vueViagem.finalizarViagem(idExcluir, idVeiculo, idMotorista)

      var viagemExcluir = null;
      console.log(idExcluir)
      for (i = 0; i < this.dados.length; i++) {
        if (this.dados[i].id == idExcluir) {
          viagemExcluir = this.dados[i]
          console.log(viagemExcluir)
          break;
        }
      }
      $.ajax({
        type: "DELETE",
        dataType: "json",
        url: "http://localhost:5050/api/viagem",
        contentType: "application/json",
        data: JSON.stringify(viagemExcluir),
        success: function (data, textStatus) {
          console.log("Motista excluido")

        }
      }).done();
    }
  }
})

function closeModal() {
  var modal = document.getElementById('modal')
  modal.style.visibility = "hidden";

  var backModal = document.getElementById('backModal')
  backModal.style.visibility = "hidden";

  vueViagem.dadosViagem.statusViagem = '1'
  vueViagem.dadosViagem.cep = null
  vueViagem.dadosViagem.diaInicio = null
  vueViagem.dadosViagem.mesInicio = null
  vueViagem.dadosViagem.anoInicio = null
  vueViagem.dadosViagem.diaFim = null
  vueViagem.dadosViagem.mesFim = null
  vueViagem.dadosViagem.anoFim = null
  vueViagem.dadosViagem.idVeiculo = null
  vueViagem.dadosViagem.idMotorista = null


}

function openModal() {
  var modal = document.getElementById('modal')
  modal.style.visibility = "visible";

  var backModal = document.getElementById('backModal')
  backModal.style.visibility = "visible";
}

function inicializar() {
  closeModal()

  
  
  vueViagem.carregarViagens()
  vueViagem.carregarMotoristas()
  vueViagem.carregarVeiculos()

  vueViagem.carregarTodosVeiculos()
  vueViagem.carregarTodosMotoristas()

  setTimeout(closeMobileMenu, 500)
  setTimeout(setTamFonte, 1000)


  var nomeUsuario = document.getElementById("nomeUsuario")


  if (localStorage.getItem("userSession")) {
    sessionObj = JSON.parse(localStorage.getItem("userSession"))

    vueViagem.userSession.nome = sessionObj.nome
    vueViagem.userSession.email = sessionObj.email
    vueViagem.userSession.cel = sessionObj.cel
    vueViagem.userSession.cpf = sessionObj.cpf

   // nomeUsuario.innerHTML = vueViagem.userSession.nome

  } else {
    console.log("não existe nada")
  }

}



