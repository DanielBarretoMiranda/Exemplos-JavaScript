function carregar() {
    var agora = new Date()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#bc8d56'
    } else if (hora < 18) {
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#6e95bc'
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#1f2d54'
    }
}