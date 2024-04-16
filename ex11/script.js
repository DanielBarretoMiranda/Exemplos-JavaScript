let atual = "";

function mostrar(a,b,c,d,w,x,y,z) {
    let principal = document.getElementById(a);
    let conteudo_mostrar = document.getElementsByClassName('parte')[w];
    
    if (atual==a) {
        principal.style.backgroundColor = "rgb(13, 13, 13)";
        conteudo_mostrar.style.display = 'none'
        
        atual = ""; 
    } else {
        conteudo_mostrar.style.display = 'flex'      
        principal.style.backgroundColor = "black";
        atual=a

        esconder(b,x);
        esconder(c,y);
        esconder(d,z);
    }
}

function esconder(a,w) {
    let aux = document.getElementById(a);
    aux.style.backgroundColor = "rgb(13, 13, 13)";

    let div = document.getElementsByClassName('parte')[w];
    div.style.display = 'none'
}

let aberto = false;

function onOff() {
    let div = document.getElementsByClassName('grupo')[0];
    let button = document.getElementsByClassName('fechar')[0];

    if (aberto) {
        button.innerHTML = '>'
        div.style.animation = 'fechar 1s ease-in-out 1 normal forwards';
        aberto = false;
    } else {
        button.innerHTML = '<'
        div.style.animation = 'abrir 1s ease-in-out 1 normal forwards';
        aberto = true;
    }
}