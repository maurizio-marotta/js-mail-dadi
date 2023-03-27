creo l'array chiamato dado con all'interno numeri dall'1 al 6

creo una const dadoUtente = Math.floor(Math.random() * dado.length + 1), queste funzioni che danno il valore di dadoUtente servono per generare un numero casuale da 1 a 6 e salvarlo nella variabile

creo una seconda const dadoBot = Math.floor(Math.random() * dado.length + 1) per fare la stessa cosa e generare un numero casuale sempre da 1 a 6

NOTA: nei valori delle due variabili precedenti il "+1" serve per non avere mai casi in cui il numero di un dado possa dare 0, senza questa aggiunta uscirebbero solo numeri da 0 a 5

creo due console.log per stampare in console i due risultati ottenuti

poi creo un if(dado[dadoUtente] > dado[dadoBot]) con all'interno delle graffe un console.log per scrivere che il dado dell'utente è più grande di quello del bot

creo un else if con la condizione contraria: else if(dado[dadoUtente] < dado[dadoBot]) per scrivere un altro console.log che stampi il messaggio di vittoria del bot

e infine creo un else con all'interno un ultimo console.log che scriva un messaggio in caso di parità dei tiri