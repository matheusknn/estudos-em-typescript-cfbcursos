"use strict";
function fsoma(v1, v2) {
    return v1 + v2;
}
console.log(fsoma(10, 20));
function fsomaRest(...n) {
    let s = 0;
    n.forEach((n) => {
        s += n;
    });
    return s;
}
console.log(fsomaRest(10, 20, 30));
