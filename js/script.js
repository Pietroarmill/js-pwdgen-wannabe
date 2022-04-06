// Chiedere all'utente il suo nome
const userName = prompt('Come ti chiami?');
console.log(userName);

// Chiedere all'utente il suo cognome
const lastName = prompt("Qual'è il tuo cognome?");
console.log(lastName);

// Chiedere all'utente il suo colore preferito
const favoriteColor = prompt("qual'è il tuo colore preferito?");
console.log(favoriteColor);

// ELABORAZIONE
// calcolo della password
const password = userName + lastName + favoriteColor + `21`;
console.log(password);

// OUTPUT
// Mostrare all'utente la sua password generata 
document.getElementById('my-title').innerHTML = `La tua password è: ${password}`;