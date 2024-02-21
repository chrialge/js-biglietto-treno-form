/*
    step1: racchiudere gli input nelle variabili:
    - nome
    - km
    - prezzo tariffario
    - prezzo finale
*/
const elementUserName = document.getElementById("fullName");
const elementUserKm = document.getElementById("kilometre_user");
let priceFinal;
const priceTariff = 0.21;

/*
step 2: creare la variabile del button e crea un evento collegato ad esso per generare il biglietto e dentro esso crea una funzione che genera i dati 
*/
const generate = document.getElementById("generated");
generate.addEventListener('click', 
function () {
    /*
    step 2b: includi il valore imesso nel proprio input nella variabile (km e nome)
    */
    let valueUserName = elementUserName.value;
    let valueUserKm = elementUserKm.value;

    /*
    step 2c: calcola il prezzo standard e crea due variabili per lo sconto
    */
    priceFinal = valueUserKm * priceTariff;
    const discountUnderAge = priceFinal/5;
    const discountOverAge = (priceFinal / 5) *2;

    /*
    step 2d: crea due variabili per prendere l'option nel select
    */
    const x = document.getElementById("age_user").selectedIndex;
    const y = document.getElementById("age_user").options;

    /*
    step 3: crea variabili per i valori che verrano imessi nel biglietto 
    */
    // div.container
    let textDiscount = 'biglietto standard';
    // div.carriage
    const numberCarriage = Math.floor(Math.random() * 10);
    // div.code-cp
    const codeCp = Math.floor(Math.random() * 100000);
    // variabile del prezzo in base alla fascia eta
    if (y[x].index == 2 ) {
        priceFinal = priceFinal - discountUnderAge;
        textDiscount = "Biglietto 20% di sconto"
    } else if(y[x].index == 1){
        priceFinal = priceFinal - discountOverAge;
        textDiscount = "Biglietto 40% di sconto"
    }
    
    if (isNaN(priceFinal)) {
        alert('devi mettere il numero di kilometri')
    }

    /*
    step 4: immetti i valori ottenuti nei corrispotivi
    */

    document.getElementById("name").innerHTML = valueUserName;
    document.getElementById("text_discount").innerHTML = textDiscount;
    document.getElementById("number_carriage").innerHTML = numberCarriage;
    document.getElementById("number_code_cp").innerHTML = codeCp;
    document.getElementById("price_train").innerHTML = priceFinal.toFixed(2);
    


}
)
/*
step 5: se clicca su annulla riaggiorna la pagina
*/
const cancel = document.getElementById("cancel")
cancel.addEventListener('click',
    function () {
    location.reload();
    }
)