
function calcuarSaldoJogador(vitorias, derrotas) {
    let saldoJogador = vitorias - derrotas
    return saldoJogador
}

function nivelarJogador() {
    if (saldoVitorias <= 10) {
        rankingJogador = 'Ferro'
    } else if (saldoVitorias <= 20) {
        rankingJogador = 'Bronze'
    } else if (saldoVitorias <= 50) {
        rankingJogador = 'Prata'
    } else if (saldoVitorias <= 80) {
        rankingJogador = 'Ouro'
    } else if (saldoVitorias <= 90) {
        rankingJogador = 'Diamante'
    } else if (saldoVitorias <= 100) {
        rankingJogador = 'Lendário'
    } else {
        rankingJogador = 'Imortal'
    }

    return rankingJogador
}

let numeroDeVitorias = 110

let numeroDeDerrotas = 80

let saldoVitorias = calcuarSaldoJogador(numeroDeVitorias, numeroDeDerrotas)

let nivelDoJogador = nivelarJogador()


console.log("O Herói tem de saldo " + saldoVitorias + ' e está no nível de ' + nivelDoJogador)