async function validator() {
  
    if(localStorage.getItem("userSession")){
        console.log("Usuário está logado")
    }else if(!localStorage.getItem("userSession")){
        console.log("Usuário não logado, redirecionar para a pagina pricipal")
        location.href = "tela_login.html"
    }
    
}

