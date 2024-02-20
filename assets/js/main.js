// console.log('hello');

// const priceTariff = 0.21;

// /*
//     step1: chiedere kilometri e l'eta
// */

// const km = Number(prompt("dimmi quanti km vuoi fare?"));
// console.log(km);

// let age = Number(prompt('dimmi la tua eta?'));
// console.log(age);

// /*
//     step 2: definire il prezzo senza nessun sconto
// */

// let priceForKilometre = km * priceTariff;
// console.log(priceForKilometre);
// // variabili sconto
// const discountUnderAge = priceForKilometre/5;
// const discountOverAge = (priceForKilometre / 5) *2;

// /*
//     step 3: applicare sconto in base l'eta
// */
// let priceFinal
// if (age < 18) {
//     priceFinal = priceForKilometre - discountUnderAge;
//     console.log(priceFinal);
// } else if (age > 65){
//     priceFinal = priceForKilometre - discountOverAge;
//     console.log(priceFinal);
// }

// document.writeln(` questo e il costo del biglietto ${priceFinal.toFixed(2)}`);
// console.log(priceFinal)

// utilies variables region
let userKm = document.getElementById("kilometre_user");
let userAge = document.getElementById("age_user");
let priceFinal
const priceTariff = 0.21;

//variable button
const generate = document.getElementById("generated")
generate.addEventListener('click', 
function () {
    userKm = userKm.value;
    console.log(userAge.value);
    userAge = userAge.value;

    priceFinal = userKm * priceTariff;
    console.log(priceFinal);

    const discountUnderAge = priceFinal/5;
    const discountOverAge = (priceFinal / 5) *2;


    if (userAge < 18) {
        priceFinal = priceFinal - discountUnderAge;
        console.log(priceFinal);

    } else if(userAge > 65){
        priceFinal = priceFinal - discountOverAge;
        console.log(priceFinal);

    }
    document.writeln(` questo e il costo del biglietto ${priceFinal.toFixed(2)}`);
    console.log(priceFinal)

}
)