function amostrar(planeta) {
    let imagem = document.getElementById('imgCamisa')
    let nome = document.getElementById('divNome')
    if (planeta == "terra") {
        nome.innerHTML = "Camisa da terra"
    } else if (planeta == "lisa") {
        nome.innerHTML = "Camisa Lisa"
    } else {
        nome.innerHTML = "Camisa de " + planeta
    }
    imagem.src = "Imagens/Camisas/" + planeta + ".png"
}