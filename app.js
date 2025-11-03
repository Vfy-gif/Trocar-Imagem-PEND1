'use strict'


const botaoTrocarImagem = document.getElementById('trocar-imagem')
const imagem = document.getElementById('imagem')
const input  = document.getElementById('brasileiros')
const botaoTrocarImagemAutomatico = document.getElementById('trocar-imagem-automatico')
const carrossel                   = document.getElementById('carrossel')


const finalistas = './img/Finalistas.jpg'
const semifinais = './img/SemiFinalistas.jpg'
const posicao_treze_cartoze = './img/BispoEdirMacedo-ChicoAnysio.jpg'
const posicao_quinze = './img/RonaldoFenomeno.jpg'
const posicao_dezesseis_dezessete_dezoito_dezenove = './img/JoseDeElencar-RobertoCarlos-ZildaArns-DencyGoncalves.jpg'
const posicao_vinte = './img/Neymar.jpg'

function trocarImagem() {
    let nome = input.value.toLowerCase().replace(/ /g, '')

    imagem.style.opacity = '1'

    if (nome == 'finalistas' || nome == 'finais' || nome == 'chicoxavier' || nome == 'santosdumont' || nome == 'princesaisabel' || nome == '1' || nome == '2' || nome == '3') {
        imagem.src = finalistas
    } else if (nome == 'semifinalistas' || nome == 'semifinais' || nome == 'ayrtonsenna' || nome == 'santosdumont' || nome == 'fernandohenriquecardoso' || nome == 'irmãdulce' || nome == 'getuliovargas' || nome == 'juscelinokubitschek' || nome == 'lula' || nome == 'oscarniemeyer' || nome == 'tiradentes' || nome == 'pelé' || nome == 'pele' || nome == '4' || nome == '5' || nome == '6' || nome == '7' || nome == '8' || nome == '9' || nome == '10' || nome == '11' || nome == '12') {
        imagem.src = semifinais
    } else if (nome == 'posicaotrezecartoze' || nome == 'posiçãotrezecartoze' || nome == '13' || nome == '14' || nome == 'bispoedirmacedo' || nome == 'chicoanysio') {
        imagem.src = posicao_treze_cartoze
    }else if (nome == '15' || nome == 'posiçãoquinze' || nome == 'posicaoquinze' || nome == 'ronaldofenomeno') {
        imagem.src = posicao_quinze
    } else if (nome == 'posicaodezesseisdezessetedezoitodezenove' || nome == 'posiçãodezesseisdezessetedezoitodezenove' || nome == '16' || nome == '17' || nome == '18' || nome == '19' || nome == 'josedeelencar' || nome == 'robertocarlos' || nome == 'zildaarns' || nome == 'dencygoncalves') {
        imagem.src = posicao_dezesseis_dezessete_dezoito_dezenove
    } else if (nome == 'posicaovinte' || nome == 'posiçãovinte' || nome == '20' || nome == 'neymar' || nome == 'neymarjunior') {
        imagem.src = posicao_vinte
    }
}


let modoAutomaticoAtivo = false

function ativarModoAutomatico() {
    imagem.style.animation = 'slider 30s infinite, fade 1s' 
    imagem.style.position = 'fixed' 
    imagem.style.top = '0'
    imagem.style.left = '0'
    imagem.style.zIndex = '-2' 
    imagem.src = '' 
    modoAutomaticoAtivo = true
}

function desativarModoAutomatico() {
    imagem.style.animation = 'none' 
    imagem.style.position = 'absolute'
    imagem.style.width    = '100%'
    imagem.style.marginTop = '-40vh'
    imagem.style.zIndex = '-1' 
    imagem.src = finalistas 
    modoAutomaticoAtivo = false
}

botaoTrocarImagemAutomatico.addEventListener('click', function () {
    if (modoAutomaticoAtivo) {
        desativarModoAutomatico()
    } else {
        ativarModoAutomatico()
    }
    // Opcional: Altera o texto do botão
    botaoTrocarImagemAutomatico.textContent = modoAutomaticoAtivo ? 'Parar Auto' : 'Auto'
})

botaoTrocarImagem.addEventListener('click', trocarImagem)
input.addEventListener('keydown', function (event) {
    if(event.key === 'Enter') {
        trocarImagem()
    }
})