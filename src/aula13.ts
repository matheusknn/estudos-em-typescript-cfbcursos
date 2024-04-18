function fsoma(v1: number, v2: number): number {
  return v1 + v2;
}
console.log(fsoma(10, 20));

function fsomaRest(...n: number[]): number {
  let s: number = 0;
  n.forEach((n) => {
    s += n;
  })
  return s;
}
console.log(fsomaRest(10, 20, 30));