function Dices() {
    res = document.getElementById("res")

    // GERAR NÚMEROS ENTRE 0 E 100, 2 CASAS DECIMAIS
    min = 0
    max = 100
    num = Math.random(min, max)
    tot = num*100

    // MOSTRAR NA TELA O VALOR
    res.innerHTML = `<br>`
    res.innerHTML += `O número foi ${tot.toFixed(2)}`
}

function Wheel() {

}

function Slide() {

}

function Blackjack() {

}