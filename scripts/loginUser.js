var vueLogin = new Vue({
    el: '#vueLogin',
    data: {
    dadoUser: null,
    email: null,
    pass: null
    },
    methods: {
  
      fazerLogin: function(){
        $.get("http://localhost:5050/api/user/?email="+this.email+"&pass="+this.pass, function(dado){
        
        if(!dado){
            console.log("Não possui esse usuário")
        }else{ // Conseguiu logar
            
            localStorage.setItem("userSession",'')
            var session = {
                nome: dado.nome.toUpperCase(),
                cpf: dado.cpf,
                email: dado.email,
                cel: dado.cel
            }
            localStorage.setItem("userSession",JSON.stringify(session))
            console.log("Usuário encontrado")
            location.href = "pageVeiculo.html"
        }


        }) 
      }
  }
  })
  