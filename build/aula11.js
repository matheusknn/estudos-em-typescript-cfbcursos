"use strict";
function somar(a, b) {
    return a + b;
}
let soma = somar(6, 8);
console.log(soma);
function soma2(n1 = 0, n2 = 0) {
    return n1 + n2;
}
function novoUser(user, pass, nome) {
    console.log(user, pass, nome);
}
novoUser("rodrigo12", "123");
novoUser("rodrigo12", "123", "Rodrigo");
