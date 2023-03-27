creo una variabile const chiamata emailUtente con valore prompt per chiedere all'utente la sua email

creo un array archivioEmail con all'interno una decina di email  

creo una variabile let statoAccesso con valore true

creo un for(let i = 0; i <= archivioEmail.length; i++)

creo un if(emailUtente === archivioEmail[i]) che controlli se emailUtente è inserita dentro archivioEmail e se lo è stampa in console il messaggio console.log(emailUtente + ' ' + 'è autorizzata ad accedere') per poi dare alla variabile statoAccesso il valore false

creo un altro if(statoAccesso === true) fuori dal for con all'interno un console.log(emailUtente + ' ' + 'non è autorizzata ad accedere')