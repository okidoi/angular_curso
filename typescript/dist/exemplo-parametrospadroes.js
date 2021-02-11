function acelera(velocidade, incremento) {
    if (incremento === void 0) { incremento = 1; }
    return velocidade + incremento;
}
console.log("acelera (5, 1) = " + acelera(5, 1));
console.log("acelera (5, 1) = " + acelera(5));
