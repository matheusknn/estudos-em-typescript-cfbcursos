class Conta {
  private numero: number;
  private titular: string;

  constructor(titular: string) {
    this.numero = this.gerarNumeroConta();
    this.titular = titular;
  }

  gerarNumeroConta(): number {
    return Math.floor(Math.random() * 100000) + 1;
  }
}

class ContaPessoaFisica extends Conta {
  cpf: number;
  constructor(cpf: number, titular: string) {
    super(titular);
    this.cpf = cpf;
  }
}

class ContaPessoaJuridica extends Conta {
  cnpj: number;
  constructor(cnpj: number, titular: string) {
    super(titular);
    this.cnpj = cnpj;
  }

}

const contapf = new ContaPessoaFisica(23507228807, "Jozas");
const contapj = new ContaPessoaJuridica(2321321331, "Kenji");