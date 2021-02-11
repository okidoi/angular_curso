function acelera (velocidade: number, incremento: number = 1) : number{

    return velocidade + incremento
}

console.log(`acelera (5, 1) = ${acelera(5,1)}`)
console.log(`acelera (5, 1) = ${acelera(5)}`)