let objeto = {
  nome: "arpas",
  idade: 25,
  status: "A",
  info: (p: string) => {
    console.log(p);
  }
}

objeto.info("teste");