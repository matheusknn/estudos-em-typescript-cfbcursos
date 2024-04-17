"use strict";
var Dias;
(function (Dias) {
    Dias[Dias["DOMINGO"] = 1] = "DOMINGO";
    Dias[Dias["SEGUNDA"] = 2] = "SEGUNDA";
    Dias[Dias["TERCA"] = 3] = "TERCA";
    Dias[Dias["QUARTA"] = 4] = "QUARTA";
    Dias[Dias["QUINTA"] = 5] = "QUINTA";
    Dias[Dias["SEXTA"] = 6] = "SEXTA";
    Dias[Dias["SABADO"] = 7] = "SABADO";
})(Dias || (Dias = {}));
console.log(Dias.DOMINGO);
console.log(Dias['DOMINGO']);
console.log(Dias[1]);
var Cores;
(function (Cores) {
    Cores["BRANCO"] = "#fff";
    Cores["PRETO"] = "#000";
})(Cores || (Cores = {}));
var TipoUsuario;
(function (TipoUsuario) {
    TipoUsuario[TipoUsuario["USER"] = 0] = "USER";
    TipoUsuario[TipoUsuario["ADMIN"] = 1] = "ADMIN";
    TipoUsuario[TipoUsuario["SUPER"] = 2] = "SUPER";
})(TipoUsuario || (TipoUsuario = {}));
const tp = TipoUsuario.ADMIN;
console.log(tp);
