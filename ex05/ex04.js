function contar() {
    var ini = document.querySelector('input#txtinicio').value
    var fin = document.querySelector('input#txtfinal').value
    var pas = document.querySelector('input#txtpasso').value
    var res = document.querySelector('div#resultado')

    if ((ini.length == 0) || (fin.length == 0) || (pas.length == 0)) {
        res.style.color = 'red'
        res.innerHTML = "Preencha todos os valores"
    } else {
        if (pas == 0) {
            if (ini > fin) {
                alert(`Passo igual a ${pas}, Passo alterado para -1`)
                pas--
            } else {
                alert(`Passo igual a ${pas}, Passo alterado para 1`)
                pas++
            }
        }
        if ((ini > fin && pas > 0) || (ini < fin && pas < 0)) {
            res.style.color = 'red'
            res.innerHTML = "Nunca chegará no Final"
        } else {
            res.style.color = 'black'
            res.innerHTML = "Inicio ➜"
            ini = Number(ini)
            fin = Number(fin)
            pas = Number(pas)
            if (ini < fin || ini == fin) {
                for (var cont = ini; cont <= fin; cont += pas) {
                    res.innerHTML += `${cont} ➜ `
                }
            } else {
                for (var cont = ini; cont >= fin; cont += pas) {
                    res.innerHTML += `${cont} ➜ `
                }

            }
            res.innerHTML += "Final"
        }
    }
}