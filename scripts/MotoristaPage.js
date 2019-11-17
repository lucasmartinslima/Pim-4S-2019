var vueMotorista = new Vue({
  el: '#vueMotorista',
  data: {
    dados: null,    // AO USAR A API DESCOMENTAR ESSA LINHA
    selecao: '',
    dadosMotorista: {
      nome: null,
      cpf: null,
      cnh: null,
      venc_cnh: null,
      cel: null,
      disponibilidade: 1
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
          vueMotorista.dados = dado;
          console.log(dado)
        }).done(() => { loadOff() })
      } else if (this.selectBusca != 4) {
        $.get("http://localhost:5050/api/motoristas/disp?disp=" + this.selectBusca, function (dado) {
          vueMotorista.dados = dado;
          console.log(dado)
        }).done(() => { loadOff() })
      } else if (this.inputBusca && this.selectBusca == 4) {
        $.get("http://localhost:5050/api/motoristas/nomeCpf?nome=" + this.inputBusca + "&cpf=" + this.inputBusca, function (dado) {
          vueMotorista.dados = dado;
          console.log(dado)
        }).done(() => { loadOff() })
      } else if (this.selectBusca == 4) {
        inicializar()
      }


    },

    carregarMotoristas: function () {

      loadOn()
      $.get("http://localhost:5050/api/motoristas", function (dado) {

        vueMotorista.dados = dado;
        console.log(dado)
      }).done(() => { loadOff() })

    },

    editarMotorista: function (idEditar) {

      var motoristaEditar = null;
      console.log(idEditar)
      for (i = 0; i < this.dados.length; i++) {
        if (this.dados[i].id == idEditar) {
          motoristaEditar = this.dados[i]

          console.log(motoristaEditar)

          this.dadosMotorista.id = motoristaEditar.id;
          this.dadosMotorista.nome = motoristaEditar.nome;
          this.dadosMotorista.cpf = motoristaEditar.cpf;
          this.dadosMotorista.disponibilidade = motoristaEditar.disponibilidade;
          this.dadosMotorista.cel = motoristaEditar.cel;
          this.dadosMotorista.cnh = motoristaEditar.cnh;
          this.dadosMotorista.venc_cnh = motoristaEditar.venc_cnh;

          openModal()
          break;
        }
      }

      $.ajax({
        type: "PUT",
        dataType: "json",
        url: "http://localhost:5050/api/motorista",
        contentType: "application/json",
        data: JSON.stringify(this.dadosMotorista),
        success: function (data, textStatus) {
          console.log("Veiculo editado")
        }
      });
    },

    salvarMotorista: function () {

      loadOn()

      if (cpf(this.dadosMotorista.cpf) == false) {

        alert('CPF INVÁLIDO! FAVOR REGISTRAR UM CPF VÁLIDO.')
        var cpfInput = document.getElementById('cpf')
        cpfInput.focus()

        loadOff();
      } else {

        this.dadosMotorista.tipo = Number(this.dadosMotorista.tipo);

        $.ajax({
          type: "POST",
          dataType: "json",
          url: "http://localhost:5050/api/motorista",
          contentType: "application/json",
          data: JSON.stringify(this.dadosMotorista),
          success: function (data, textStatus) {
            console.log("Veiculo adicionado" + this.dadosMotorista)
          }
        }).done(() => { loadOff(); inicializar(); }).fail(() => { alert("Item não adicionado, favor verificar a sua conexão!") });

        this.dadosMotorista.nome = null
        this.dadosMotorista.cnh = null
        this.dadosMotorista.cpf = null
        this.dadosMotorista.cel = null
        this.dadosMotorista.venc_cnh = null
        this.dadosMotorista.disponibilidade = 1

      }



    },

    excluirMotorista: function (idExcluir) {
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
            inicializar()
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


  vueMotorista.dadosMotorista.nome = null
  vueMotorista.dadosMotorista.tipo = null
  vueMotorista.dadosMotorista.placa = null
  vueMotorista.dadosMotorista.cor = null
  vueMotorista.dadosMotorista.disponibilidade = 1


}

function openModal() {
  var modal = document.getElementById('modal')
  modal.style.visibility = "visible";

  var backModal = document.getElementById('backModal')
  backModal.style.visibility = "visible";
}

function inicializar() {
  closeModal()
  vueMotorista.carregarMotoristas()

  var nomeUsuario = document.getElementById("nomeUsuario")


  if (localStorage.getItem("userSession")) {
    sessionObj = JSON.parse(localStorage.getItem("userSession"))

    vueMotorista.userSession.nome = sessionObj.nome
    vueMotorista.userSession.email = sessionObj.email
    vueMotorista.userSession.cel = sessionObj.cel
    vueMotorista.userSession.cpf = sessionObj.cpf

    nomeUsuario.innerHTML = vueMotorista.userSession.nome

  } else {
    console.log("não existe nada")
  }

}

