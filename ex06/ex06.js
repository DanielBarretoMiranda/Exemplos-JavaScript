function tab() {
    let num = document.querySelector('input#txtnum').value
    let tab = document.querySelector('select#seltab')

    if (num.length == 0) {
        alert("Por favor entre com um número!")
    } else {
        tab.innerHTML = ""
        for (let cont = 1; cont < 11; cont++) {
            let item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num*cont}`
            tab.appendChild(item)
        }
    }
}