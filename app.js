'use strict'

const botaoTrocarImagem = document.getElementById(trocar-imagem)

const imagem = document.createElement('img');
imagem.src = './img'

function trocarImagem () {
    const imagem = document.getElementById('brasileiros').value
    document.documentElement.style.setProperty('--bg-image-', imagem)

}

botaoTrocarCor.addEventListener('click', trocarImagem)