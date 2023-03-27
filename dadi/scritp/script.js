const dadoUtente = Math.floor(Math.random() * 6 + 1);
const dadoBot = Math.floor(Math.random() * 6 + 1);

console.log(dadoUtente);
console.log(dadoBot);


if (dadoUtente > dadoBot){

    console.log("Hai vinto!" + ' ' + dadoUtente);


}else if (dadoUtente < dadoBot){

    console.log("Hai perso!" + ' ' + dadoBot);

}else{

    console.log("pareggiato!" + ' ' + dadoUtente + ' ' + dadoBot);

}






