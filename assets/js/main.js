// crea le variabili selezionando gli input poi variabili poi variabili per il prezzo
const elementUserAge = document.getElementById("age_user")
const elementUserName = document.getElementById("fullName");
const elementUserKm = document.getElementById("kilometre_user");
let priceFinal;
const priceTariff = 0.21;

// variabile che seleziona la card dove incolleremo i biglietti
const ticketElement = document.querySelector(".ticket");

/*
crea una funzione con un form che si aziona quando clicchiamo sul button generate
*/
document.querySelector('form').addEventListener('submit', function (e) {

    e.preventDefault();
    // creare le variabili che raccogliere le il valore degli input e select
    const userName = elementUserName.value;
    const userKm = Number(elementUserKm.value);
    const userAge = Number(elementUserAge.value);
    console.log(userAge, userKm, userName);

    //  creo delle variabie peril prezzo strandard senza sconto
    let priceFinal = priceTariff * userKm;
    console.log(priceFinal);

    // creao vriabili per lo sconto
    let discountTicket = 'Biglietto Standard';
    const discountJunior = priceFinal * 0.2;
    const discountSenior = priceFinal * 0.4;

    /* creo una condizione in cui: 
        -Se sei minorene 20% off 
        - Altrimenti Se sei over 65 40% off
    */
    if (userAge === 1) {
        priceFinal = priceFinal - discountJunior;
        discountTicket =  'Sconto del 20%';
    }else if(userAge ===2){
        priceFinal = priceFinal - discountSenior
        discountTicket =  'Sconto del 40%';
    }

    // stampa il biglietto che puo essere cambiato in base alle condizioni
    console.log(priceFinal);

    // creo due vriabili per numeri randomici
    const wagonNumber = Math.floor(Math.random()* 10) + 1;
    const codeCpNumber = Math.floor(Math.random() * 100000) +1;

    // un console.log per vedere se prende tutti i dati
    console.log(codeCpNumber, wagonNumber, priceFinal, userName);

    // crea una variabile che contiene il markup del HTML
    const markup = `
            <div class="card_ticket">
                <div class="left_ticket col-3">
                    <h3>NOME PASSEGGERO</h3>
                    <h4>${userName}</h4>
                </div>
                <div class="right_ticket col-9">
                    <div class="discount col-3">
                        <h4>Offerta</h4>
                        <span>${discountTicket}</span>
                    </div>
                    <div class="carriage col-3">
                        <h4>Carrozza</h4>
                        <span>${wagonNumber}</span>
                    </div>
                    <div class="code_cp col-3">
                        <h4>Codice CP</h4>
                        <span>${codeCpNumber}</span>
                    </div>
                    <div class="cost-ticket col-3">
                        <h4>Costo biglietto</h4>
                        <span>${priceFinal.toFixed(2)}</span>
                    </div>
                </div>
            </div>
    `;

    //aggiunge al html i card_ticket
    ticketElement.insertAdjacentHTML('beforeend', markup);
})
