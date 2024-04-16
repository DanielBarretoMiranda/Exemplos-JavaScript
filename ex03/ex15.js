function verificar() {
    var resultado = document.querySelector('div#resultado') //document.getElementById('resultado')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtAno').value //sómente 1 value por var
    var error1 = document.getElementById('error1')
    var error2 = document.getElementById('error2')
    var fSex = document.getElementsByName('radioSx')

    if (fano.length == 0 || Number(fano) > 2023) {
        resultado.innerHTML = "Preencha os dados a cima para ver o resultado!"
        resultado.style.textAlign = 'left'
        error1.style.color = 'red'
        error1.innerHTML = "Ano de nascimento invalido"
        if (!(fSex[0].checked || fSex[1].checked)) {
            error2.style.color = 'red'
            error2.innerHTML = "Selecione um gêneroS"
        } else {
            error2.innerHTML = ""
        }
    } else {
        error1.innerHTML = ""
        if (!(fSex[0].checked || fSex[1].checked)) {
            error2.style.color = 'red'
            error2.innerHTML = "Selecione um genêro"
            resultado.style.textAlign = 'left'
            resultado.innerHTML = "Preencha os dados a cima para ver o resultado!"
        } else {
            error2.innerHTML = ""
            var idade = ano - Number(fano)
            var genero = ""
            error2.innerHTML = ""
            var img = document.createElement('img')
            img.setAttribute('id', "Foto")
            if (fSex[0].checked) {
                genero = "Homem"
                error2.innerHTML = ""
                if (idade < 4) {
                    //criança
                    img.setAttribute('src', 'imagens/hnovo.png')
                } else if (idade < 20) {
                    //jovem
                    img.setAttribute('src', 'imagens/hjovem.png')
                } else if (idade < 40) {
                    //Jovem adulto
                    img.setAttribute('src', 'imagens/h.png')
                } else if (idade < 60) {
                    //adulto
                    img.setAttribute('src', 'imagens/hadulto.png')
                } else if (idade < 120) {
                    //idoso
                    img.setAttribute('src', 'imagens/hidoso.png')
                } else {
                    //morto
                    img.setAttribute('src', 'imagens/caveira.png')
                }
            } else if (fSex[1].checked) {
                genero = "Mulher"
                error2.innerHTML = ""
                if (idade < 4) {
                    //criança
                    img.setAttribute('src', 'imagens/mnova.png')
                } else if (idade < 20) {
                    //jovem
                    img.setAttribute('src', 'imagens/mjovem.png')
                } else if (idade < 40) {
                    //Jovem adulto
                    img.setAttribute('src', 'imagens/m.png')
                } else if (idade < 60) {
                    //adulto
                    img.setAttribute('src', 'imagens/madulta.png')
                } else if (idade < 120) {
                    //idoso
                    img.setAttribute('src', 'imagens/midosa.png')
                } else {
                    //morto
                    img.setAttribute('src', 'imagens/caveira.png')
                }
            }
            resultado.style.textAlign = 'center'
            resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
            resultado.appendChild(img)
        }

    }

}