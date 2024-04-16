let capa = document.getElementsByClassName('capa')[0]

let blocoPreto = document.getElementById('blocoPreto')
let mdPreto = document.getElementById('modalPreto')

let blocoBranco = document.getElementById('blocoBranco')
let mdBranco = document.getElementById('modalBranco')

blocoPreto.onclick = function() {
    mdPreto.style.display = 'block'
    capa.style.display = 'block'
}

blocoBranco.onclick = function() {
    mdBranco.style.display = 'block'
    capa.style.display = 'block'
}

function fecharmd() {
    capa.style.display = 'none'
    mdPreto.style.display = 'none'
    mdBranco.style.display = 'none'
}






