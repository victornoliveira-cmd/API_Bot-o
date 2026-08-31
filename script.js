function apertou1() {
    console.log("apertou")

    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)
        document.getElementById('imagem').innerHTML = corpo.imagem
        document.getElementById('nome').innerHTML = corpo.name
        document.getElementById('botao').innerHTML = corpo.botao
        document.getElementById('descricao').innerHTML = corpo.describe
        document.getElementById('preco').innerHTML = corpo.price
    })
}

function apertou2() {
    console.log('apertou2')
    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        document.getElementById('imagem').innerHTML = corpo.imagem2
        document.getElementById('nome').innerHTML = corpo.name2
        document.getElementById('botao').innerHTML = corpo.botao2
        document.getElementById('descricao').innerHTML = corpo.describe2
        document.getElementById('preco').innerHTML = corpo.price2
    })
}
function apertou3() {
    console.log('apertou2')
    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        document.getElementById('imagem').innerHTML = corpo.imagem3
        document.getElementById('nome').innerHTML = corpo.name3
        document.getElementById('botao').innerHTML = corpo.botao3
        document.getElementById('descricao').innerHTML = corpo.describe3
        document.getElementById('preco').innerHTML = corpo.price3
    })
}
function apertou4() {
    console.log('apertou2')
    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        document.getElementById('imagem').innerHTML = corpo.imagem4
        document.getElementById('nome').innerHTML = corpo.name4
        document.getElementById('botao').innerHTML = corpo.botao4
        document.getElementById('descricao').innerHTML = corpo.describe4
        document.getElementById('preco').innerHTML = corpo.price4
    })
}
function apertou5() {
    console.log('apertou2')
    fetch('db.json').then(resposta => resposta.json()).then(corpo => {
        document.getElementById('imagem').innerHTML = corpo.imagem5
        document.getElementById('nome').innerHTML = corpo.name5
        document.getElementById('botao').innerHTML = corpo.botao5
        document.getElementById('descricao').innerHTML = corpo.describe5
        document.getElementById('preco').innerHTML = corpo.price5
    })
}