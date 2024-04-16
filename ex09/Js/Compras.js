/* 4 */

function prodSel() {
    /*campos de seleção */
    let prod = document.getElementById('selProduto')
    let corSel = document.getElementById('selCor')
    let tamSel = document.getElementById('selTam')
    let modSel = document.getElementById('selMod')

    /*cores de corSel*/  
    let azul = corSel.querySelector('option[value="Az"]')
    let lilas = corSel.querySelector('option[value="Li"]')
    
    let linhaProdSel = document.getElementById('txtDesc')
    let preco = document.getElementById('TxtPreco')

    corSel.removeAttribute('disabled')
    /*limpar campos no troca de produto*/
    corSel.value = "---"
    tamSel.value = "---"
    modSel.value = "---"
    linhaProdSel.value = ""
    preco.value = ""

    if (ehMascara(prod)) {
        tamSel.setAttribute('disabled', 'disabled')
        modSel.setAttribute('disabled', 'disabled')
        
        azul.setAttribute('disabled', 'disabled')
        lilas.setAttribute('disabled', 'disabled')

    } else if (prod.value == '---') {
        corSel.setAttribute('disabled', 'disabled')
        tamSel.setAttribute('disabled', 'disabled')
        modSel.setAttribute('disabled', 'disabled')
        
    } else {
        tamSel.removeAttribute('disabled')
        modSel.removeAttribute('disabled')
        
        azul.removeAttribute('disabled')
        lilas.removeAttribute('disabled')
    }
}

function ehMascara(prod) {
    /*é máscara?*/
    if (prod.selectedIndex >= 11) {
        return true     
    } else {
        return false
    }
}

/* 5 */

function estaPronto(prod, corSel, tamSel, modSel) {
    // checa se todos os selects estão certos/preenchidos
    if (((ehMascara(prod)) && (corSel.value !=  '---')) || ((!ehMascara(prod)) && (corSel.value !=  '---') && (tamSel.value != '---') && (modSel.value != '---'))) {
        return true 
    } else {
        return false
    }
}

function desc() {
    let prod = document.getElementById('selProduto')
    let corSel = document.getElementById('selCor')
    let tamSel = document.getElementById('selTam')
    let modSel = document.getElementById('selMod')
    
    if (estaPronto(prod, corSel, tamSel, modSel)) {
        let linhaProdSel = document.getElementById('txtDesc')
        let preco = document.getElementById('TxtPreco')

        if (ehMascara(prod)) {
            linhaProdSel.value = `Mas. ${prod.value} - ${corSel.value}`
            preco.value = 35.00
        } else {
            linhaProdSel.value = `Cam. ${prod.value} - ${corSel.value} - ${tamSel.value} - ${modSel.value}` 
            preco.value = 70.00
        }
    }
}

function limparCampos(prod, corSel, tamSel, modSel, linhaProdSel, preco) {
    corSel.setAttribute('disabled', 'disabled')
    tamSel.setAttribute('disabled', 'disabled')
    modSel.setAttribute('disabled', 'disabled')
    prod.value = "---"
    corSel.value = "---"
    tamSel.value = "---"
    modSel.value = "---"
    linhaProdSel.value = ""
    preco.value = ""
}

let totP = 0
function comprar() {
    let prod = document.getElementById('selProduto')
    let corSel = document.getElementById('selCor')
    let tamSel = document.getElementById('selTam')
    let modSel = document.getElementById('selMod')

    let linhaProdSel = document.getElementById('txtDesc')
    let preco = document.getElementById('TxtPreco')

    if (estaPronto(prod, corSel, tamSel, modSel)) {
        let total = document.getElementById('TxtTotal')
        let listaPedidos = document.getElementById('listaPedidos')
        
        totP += Number(preco.value)
        total.value = totP
        listaPedidos.value += `${linhaProdSel.value} \n`

        limparCampos(prod, corSel, tamSel, modSel, linhaProdSel, preco)
    } else {
        alert('Definição de produto não está completa!')
    }
}