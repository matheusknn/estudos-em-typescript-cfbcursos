"use strict";
class Computador {
    nome = "";
    ram = 0;
    cpu = 0;
    ligado = false;
    constructor(nome, ram, cpu, ligado) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }
    mostrarInformacoes() {
        console.log(`nome: ${this.nome}`);
        console.log(`ram: ${this.ram}`);
        console.log(`cpu: ${this.cpu}`);
        console.log(`ligado: ${this.ligado ? "sim" : "não"}`);
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
let computador1 = new Computador("Venom", 5, 29, true);
let computador2 = new Computador("Gamer", 12, 29, false);
computador1.mostrarInformacoes();
