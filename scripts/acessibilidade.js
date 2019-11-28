
var tm = Number(localStorage.getItem("tamFonte"))


function setTamFonte() {
    
    var paragraf = document.querySelectorAll('td')
    for (i = 0; i < paragraf.length; i++) {
        
        paragraf[i].style.fontSize = tm + "px"
        localStorage.setItem("tamFonte", tm)
    }
}


function aumentarFonte() {

    tm += 2;

    var paragraf = document.querySelectorAll('td')
    for (i = 0; i < paragraf.length; i++) {
        console.log(paragraf[i].style.fontSize)
        paragraf[i].style.fontSize = tm + "px"

        localStorage.setItem("tamFonte", tm)
    }
}
function diminuirFonte() {

    tm -= 2;

    var paragraf = document.querySelectorAll('td')
    for (i = 0; i < paragraf.length; i++) {
        console.log(paragraf[i].style.fontSize)
        paragraf[i].style.fontSize = tm + "px"

        localStorage.setItem("tamFonte", tm)
    }
}

