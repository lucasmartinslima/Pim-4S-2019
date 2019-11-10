var vueViagem = new Vue({
  el: '#vueViagem',
  data: {
    dados: null,    // AO USAR A API DESCOMENTAR ESSA LINHA
    dadoMotoristasDisps : null,
    selecao: '',
    idMotoristaSelect : 1,
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
    vm : this

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


    editarViagem: function (idEditar) {

      var motoristaEditar = null;
      console.log(idEditar)
      for (i = 0; i < this.dados.length; i++) {
        if (this.dados[i].id == idEditar) {
          motoristaEditar = this.dados[i]

          console.log(motoristaEditar)

          this.dadosViagem.id = motoristaEditar.id;
          this.dadosViagem.nome = motoristaEditar.nome;
          this.dadosViagem.cpf = motoristaEditar.cpf;
          this.dadosViagem.disponibilidade = motoristaEditar.disponibilidade;
          this.dadosViagem.cel = motoristaEditar.cel;
          this.dadosViagem.cnh = motoristaEditar.cnh;
          this.dadosViagem.venc_cnh = motoristaEditar.venc_cnh;

          openModal()
          break;
        }
      }

      $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:5050/api/motorista",
        contentType: "application/json",
        data: JSON.stringify(this.dadosViagem),
        success: function (data, textStatus) {
          console.log("Veiculo editado")
        }
      });
    },

    salvarViagem: function () {

      loadOn()

      if (cpf(this.dadosViagem.cpf) == false) {

        alert('CPF INVÁLIDO! FAVOR REGISTRAR UM CPF VÁLIDO.')
        var cpfInput = document.getElementById('cpf')
        cpfInput.focus()

        loadOff();
      } else {

        this.dadosViagem.tipo = Number(this.dadosViagem.tipo);

        $.ajax({
          type: "POST",
          dataType: "json",
          url: "http://localhost:5050/api/motorista",
          contentType: "application/json",
          data: JSON.stringify(this.dadosViagem),
          success: function (data, textStatus) {
            console.log("Veiculo adicionado" + this.dadosViagem)
          }
        }).done(() => { loadOff(); inicializar(); }).fail(() => { alert("Item não adicionado, favor verificar a sua conexão!") });

        this.dadosViagem.nome = null
        this.dadosViagem.cnh = null
        this.dadosViagem.cpf = null
        this.dadosViagem.cel = null
        this.dadosViagem.venc_cnh = null
        this.dadosViagem.disponibilidade = 1

      }



    },

    excluirViagem: function (idExcluir) {
      loadOn()
      var motoristaExcluir = null;
      console.log(idExcluir)
      for (i = 0; i < this.dados.length; i++) {
        if (this.dados[i].id == idExcluir) {
          motoristaExcluir = this.dados[i]
          console.log(motoristaExcluir)
          break;
        }
      }
      $.ajax({
        type: "DELETE",
        dataType: "json",
        url: "http://localhost:5050/api/motorista",
        contentType: "application/json",
        data: JSON.stringify(motoristaExcluir),
        success: function (data, textStatus) {
          console.log("Motista excluido")
        
        }
      }).done( );
    }
  }
})

function closeModal() {
  var modal = document.getElementById('modal')
  modal.style.visibility = "hidden";

  var backModal = document.getElementById('backModal')
  backModal.style.visibility = "hidden";


  vueViagem.dadosViagem.nome = null
  vueViagem.dadosViagem.tipo = null
  vueViagem.dadosViagem.placa = null
  vueViagem.dadosViagem.cor = null
  vueViagem.dadosViagem.disponibilidade = 1


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

  var nomeUsuario = document.getElementById("nomeUsuario")


  if (localStorage.getItem("userSession")) {
    sessionObj = JSON.parse(localStorage.getItem("userSession"))

    vueViagem.userSession.nome = sessionObj.nome
    vueViagem.userSession.email = sessionObj.email
    vueViagem.userSession.cel = sessionObj.cel
    vueViagem.userSession.cpf = sessionObj.cpf

    nomeUsuario.innerHTML = vueViagem.userSession.nome

  } else {
    console.log("não existe nada")
  }

}

