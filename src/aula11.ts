function somar(a: number, b: number): number {
  return a + b;
}

let soma: number = somar(6, 8);
console.log(soma);

//parâmetros padrões
function soma2(n1: number = 0, n2: number = 0): number {
  return n1 + n2;
}

//parâmetros opcionais
function novoUser(user: string, pass: string, nome?: string) {//? deixa o parâmetro nome opcional
  console.log(user, pass, nome);
}

novoUser("rodrigo12", "123");
novoUser("rodrigo12", "123", "Rodrigo");