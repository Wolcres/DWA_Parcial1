var listSigns;
var links;
var articulo;
const section = document.querySelector('section');

function setup() {
    fetch("https://dwaapi.juvasquez88.vercel.app/letters")
        .then(response => response.json())
        .then(json => listSigns = json)
        .then(() => console.log(listSigns));
}

function representarSena(){
    const lista = listSigns['letters'];
    for(var i = 0; i < lista.length; i++){
        const letra = document.createElement('button');
        letra.textContent = lista[i].letter;
        letra.setAttribute('class','btn btn-secondary m-1');
        letra.setAttribute('id', lista[i].letter);
        letra.setAttribute('onclick','cambiarImagen(this.id)');
        section.appendChild(letra);
        console.log(letra);
    }
}

function cambiarImagen(id){
    const imagen = document.getElementById("imagenSena");
    const lista = listSigns['letters'];
    for(var i = 0; i < lista.length; i++){
        if(id==lista[i].letter){
            imagen.setAttribute('src', lista[i].image);
        }
    }
}
