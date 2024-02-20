console.log('hello');

const priceTariff = 0.21;

/*
    step1: chiedere kilometri e l'eta
*/

const km = Number(prompt("dimmi quanti km vuoi fare?"));
console.log(km);

let age = Number(prompt('dimmi la tua eta?'));
console.log(age);

/*
    step 2: definire il prezzo senza nessun sconto
*/

let priceForKilometre = km * priceTariff;
console.log(priceForKilometre);
// variabili sconto
const discountUnderAge = priceForKilometre/5;
const discountOverAge = (priceForKilometre / 5) *2;

/*
    step 3: applicare sconto in base l'eta
*/
let priceFinal
if (age < 18) {
    priceFinal = priceForKilometre - discountUnderAge;
    console.log(priceFinal);
} else if (age > 65){
    priceFinal = priceForKilometre - discountOverAge;
    console.log(priceFinal);
}

document.writeln(` questo e il costo del biglietto ${priceFinal.toFixed(2)}`);
console.log(priceFinal)

// input region
const userKm = Number(document.getElementById("kilometre_user").value);
const userAge = Number(document.getElementById("age_user").value);
let priceTrial

const generate = document.querySelector("button")
generate.addEventListener('click', 
function () {
    priceTrial = userKm * priceTariff;
    console.log(priceTrial);
    
}
)