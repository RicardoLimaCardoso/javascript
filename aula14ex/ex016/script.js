function contar() {
    var inicio = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passos = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando o passo 1')
            p = 1
        }
        if (i < f ) {
            for(var c = i ; c <= f ; c += p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }else {
            for(var c = i ; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}