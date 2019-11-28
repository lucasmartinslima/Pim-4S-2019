function openMobileMenu(){
var menu = document.getElementById("menu-mobile")
menu.style.visibility = "visible"
}
function closeMobileMenu(){
    var menu = document.getElementById("menu-mobile")
menu.style.visibility = "hidden"
}




function redirect(nP){

if(nP == 1)pagina = 'pageVeiculo.html'
if(nP == 2)pagina = 'pageMotorista.html'
if(nP == 3)pagina = 'pageViagem.html'


    window.location = pagina;

}