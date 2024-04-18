class Computador {
  public nome: string = "";
  private ram: number = 0;
  private cpu: number = 0;
  protected ligado: boolean = false;

  constructor(nome: string, ram: number, cpu: number, ligado: boolean) {
    this.nome = nome;
    this.ram = ram;
    this.cpu = cpu;
    this.ligado = ligado;
  }

  mostrarInformacoes(): void {
    console.log(`nome: ${this.nome}`);
    console.log(`ram: ${this.ram}`);
    console.log(`cpu: ${this.cpu}`);
    console.log(`ligado: ${this.ligado ? "sim" : "não"}`);
  }

  ligar(): void {
    this.ligado = true;
  }

  desligar(): void {
    this.ligado = false;
  }
}

let computador1 = new Computador("Venom", 5, 29, true);
let computador2 = new Computador("Gamer", 12, 29, false);
computador1.mostrarInformacoes();

