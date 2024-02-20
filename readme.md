
## istruction
esercizio di oggi: calcolo del prezzo del biglietto del treno 2.0
cartella/repo js-biglietto-treno-form

Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

# steps

step1: racchiudere gli input nelle variabili:
- nome
- km
- prezzo tariffario
- prezzo finale

step 2: creare la variabile del button e crea un evento collegato ad esso per generare il biglietto e dentro esso crea una funzione che genera i dati 
    - step 2b: includi il valore imesso nel proprio input nella variabile (km e nome)
    - step 2c: calcola il prezzo standard e crea due variabili per lo sconto
    - step 2d: crea due variabili per prendere l'option nel select

    

step 3: crea variabili per i valori che verrano imessi nel biglietto (dentro all funzione del generate)

step 4: immetti i valori ottenuti nei corrispotivi (dentro alla funzione del generate)


step 5: crea una funzione collegata al button annulla

# tools

- console.log
- prompt()
- number
- let/const
- if/else if
- document
- .getElementById()
- .selectedIndex
- .options
- Math.floor()
- Math.random()
- .value
- .innerHTML
- .toFixed()
- .addEventListener
- location.reload()
- function(){}