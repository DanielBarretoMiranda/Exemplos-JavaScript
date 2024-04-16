var listaNum = []
var res = document.querySelector('div#divResultado')
let opt = document.querySelector('select#selNumeros')

function add() {
    let num = document.querySelector('input#txtNum')
    if (num.value.length == 0) {
        alert("Erro! Entre com um número!")
    } else if ((num.value < 1) || (num.value > 99)) {
        alert("Entre com um número válido! (Entre 0 a 100)")
    } else {
        if (listaNum.indexOf(num.value) != -1) {
            alert(`Número ${num.value} já digitado, entre com outro valor!`)
        } else {
            res.innerHTML = ""
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            opt.appendChild(item)
            listaNum.push(Number(num.value))
        }

    }
    num.value = ""
    num.focus()
}

function fim() {
    if (listaNum.length == 0) {
        alert("Nenhum número adicionado! Entre com alguns números.")
    } else {
        res.innerHTML += `Total de ${listaNum.length} números digitados;<br>`
        let maior = listaNum[0]
        let menor = listaNum[0]
        let soma = 0
        for (let cont in listaNum) {
            if (listaNum[cont] > maior) {
                maior = listaNum[cont]
            }
            if (listaNum[cont] < menor) {
                menor = listaNum[cont]
            }
            soma += Number(listaNum[cont])
        }
        res.innerHTML += `<p>O maior valor digitado foi ${maior};</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor};</p>`
        res.innerHTML += `<p>A soma total foi de ${soma};</p>`
        res.innerHTML += `<p>A média de todos os valores foi de ${(soma/listaNum.length).toFixed(2)}</p>`
    }
}

function limpar() {
    if (listaNum.length == 0) {
        alert("Nada para limpar")
    } else {
        res.innerHTML = ""
        opt.innerHTML = ""
        listaNum = []
    }

}