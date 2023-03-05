function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    var img = window.document.createElement('img')
    img.setAttribute('id' , 'foto')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados digitados e tente novamente!')
    }else {
        fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 12) {
                img.setAttribute('src' , 'imagens/bebe-masc.png')
                
            }else if (idade < 18) {
                img.setAttribute('src' , 'imagens/jovem-masc.png')

            }else if (idade < 50) {
                img.setAttribute('src' , 'imagens/adulto-masc.png')

            }else {
               img.setAttribute('src' , 'imagens/idoso-masc.png')
            }

        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 12) {
                img.setAttribute('src' , 'imagens/bebe-fem.png')
                
            }else if (idade < 18) {
                img.setAttribute('src' , 'imagens/jovem-fem.png')

            }else if (idade < 50) {
                img.setAttribute('src' , 'imagens/adulto-fem.png')

            }else {
                img.setAttribute('src' , 'imagens/idoso-fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }

}