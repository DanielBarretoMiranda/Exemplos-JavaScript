let totalCliques = 0

function clicar() {
    
    totalCliques++
    if (totalCliques==5) {
        let capa = document.getElementById('div-capa')
        let aviso = document.getElementById('div-aviso')
        let parar = document.getElementById('div-parar')
        aviso.style.display = 'block'
        capa.style.display = 'block'
        parar.style.display = 'block'
    }

    let titulo = document.querySelector('h1#titulo')
    let divCor = document.getElementById('div-bot') 
    let cor = document.getElementById('codigoCor')
    
    let n1 = Math.floor(Math.random() * 256)
    let n2 = Math.floor(Math.random() * 256)
    let n3 = Math.floor(Math.random() * 256)
    
    cor.innerHTML = `Código da Cor <br> rgb(${n1}, ${n2}, ${n3}) `
    divCor.style.backgroundColor = `rgb(${n1}, ${n2}, ${n3})`
    
    titulo.style.color = 'white'
    cor.style.color = 'white'  
    if (n1==n2==n3==255) {
        titulo.style.color = 'black'
        cor.style.color = 'black'
    }
    
    document.body.innerHTML += `<div class="div-cores" name="div-cores" style="background-color: rgb(${n1}, ${n2}, ${n3});" onclick="verificarRGB('rgb(${n1}, ${n2}, ${n3})')"></div>`
    let click = new Audio('sound-11.mp3')
    click.play()
}

function fecharAviso() {
    let capa = document.getElementById('div-capa')
    let aviso = document.getElementById('div-aviso')
    let divRGB = document.getElementById('div-rgb')
    capa.style.display = 'none'
    aviso.style.display = 'none'
    divRGB.style.display = 'none'
}

function verificarRGB(rgb) {
    let divRGB = document.getElementById('div-rgb')
    let capa = document.getElementById('div-capa')
    let textRes = document.getElementById('p-resultado-rgb')
    let quadrado = document.getElementById('div-quadrado-rgb')

    capa.style.display = 'block'
    divRGB.style.display = 'block'

    textRes.innerHTML = rgb
    quadrado.style.backgroundColor = rgb
}

function chamarParada() {
    let bot = document.getElementById('div-conteudo-bot')
    bot.innerHTML = '<h1>Quer realmente parar?</h1><button onclick="confirmarParada(0)">SIM</button><button onclick="confirmarParada(1)">NÃO</button>'

    
    let fundo = document.getElementById('div-bot')
    fundo.style.backgroundColor = 'red'
}

function confirmarParada(valor) {
    let bot = document.getElementById('div-conteudo-bot')
    if (valor==1) {
        let fundo = document.getElementById('div-bot')
        fundo.style.backgroundColor = 'white'

        bot.innerHTML = bot.innerHTML = '<h1 id="titulo">Clique!</h1><img src="button.png" id="button" onclick="clicar()"><div id="codigoCor" class="codigoCor"></div>'
    } else {
        acabar()
    }
}

function acabar() {
    let final = document.getElementById('div-final')
    final.style.display = 'block'
    final.innerHTML = `<div><h2>Você Parou</h2>e clicou no botão<h2>${totalCliques}</h2>vezes</div>`
    final.innerHTML += '<button onclick="recomecar()">RECOMEÇAR</button>'
}

function recomecar() {
    location.reload()
}


