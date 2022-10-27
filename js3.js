let hrini = 12;
console.log("Hora inicial")
console.log(hrini)
let tomdia = 3;
console.log("frecuencia de las tomas")
console.log(tomdia)
let totaltom = 5;
console.log("Tomas totales")
console.log(totaltom)

let horas = hrini;

for (i = 1; i <= totaltom; i++) {
    if (horas > 23) {
        horas -= 24;
    }
    console.log("toma" + "#" + i + " " + horas +"hrs");
    horas += tomdia;
}