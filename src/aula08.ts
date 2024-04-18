enum Dias {
  DOMINGO = 1,
  SEGUNDA = 2,
  TERCA = 3,
  QUARTA = 4,
  QUINTA = 5,
  SEXTA = 6,
  SABADO = 7,
}
console.log(Dias.DOMINGO); //retorna 1
console.log(Dias['DOMINGO']);//retorna 1
console.log(Dias[1]);//retorna domingo

enum Cores {
  BRANCO = "#fff",
  PRETO = "#000"
}

enum TipoUsuario {
  USER,//0
  ADMIN,//1
  SUPER//2
}

const tp: TipoUsuario = TipoUsuario.ADMIN; // variável que pode adicionar apenas valores do enum
console.log(tp);
