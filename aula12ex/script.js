var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var data = new Date()
var hora = data.getHours

msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    imagem.src = 'imagem-manha.jpg'
}