let vitorias = 10;
let derrotas = 2;

function calcularSaldoDoJogador(vitorias, derrotas){
    return vitorias - derrotas;
}
let saldoDeVitorias = calcularSaldoDoJogador(vitorias,derrotas);

function verRankDoJogador(vitorias){
    if (vitorias <= 10){
        return "Ferro";
    }
    if (vitorias <= 20){
        return "Bronze";
    }
    if (vitorias <= 50){
        return "Prata";
    }
    if (vitorias <= 80){
        return "Ouro";
    }
    if (vitorias <= 90){
        return "Diamante";
    }
    if (vitorias <= 100){
        return "Lendário";
    }
    if (vitorias > 100){
        return "Imortal";
    }
}
let rank = verRankDoJogador(vitorias);

console.log("O Herói tem de saldo de " + saldoDeVitorias + " está no nível de " + rank);