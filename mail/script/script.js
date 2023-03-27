function Accedi () {
    
  var email_utente = document.getElementById('accedi').value;

  for (var i = 0; i < caselle_mail.length; i++) {
      console.log(caselle_mail[i]);
      console.log(i);
        
      if (email_utente == caselle_mail[i])  {
          alert("Accesso eseguito correttamente"); break;
          
      } 
  }
  
  if (!email_utente.includes("@gmail.com")) {
      alert("La Email deve contenere @gmail.com");
  
  } else if (email_utente !== caselle_mail[i]) {
      alert ("Email non registrata");
    
  }        
  
} 

var caselle_mail = ["ugo@gmail.com", "gino@gmail.com", "giorgio@gmail.com", "stefania@gmail.com"]

function Registrazione() {

  var email_utente = document.getElementById('registrati').value;

  for (var i = 0; i < caselle_mail.length; i++) {
  console.log(caselle_mail[i]);
  console.log(i);

  if (email_utente == caselle_mail[i]) {
      alert("Account già esistente"); break;
  }

}   

if (!email_utente.includes("@gmail.com")) {
  alert("La Email deve contenere @gmail.com");

} else if (email_utente !== caselle_mail[i])
  alert("Registrazione completata");
  email_utente = document.getElementById('registrati').value;
  caselle_mail.push(email_utente);  
  console.log(caselle_mail);
      
}    
