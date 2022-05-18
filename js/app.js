const typeDistance = prompt('Quanti chilometri vuoi percorrere??');
const typeAge = prompt('Quanti anni hai??');

let ticketPrice = typeDistance * 0.21;

console.log(typeDistance, typeAge, ticketPrice);

const age = document.getElementById("age");
age.innerHTML = `${typeAge}`

const distance = document.getElementById("distance");
distance.innerHTML = `${typeDistance}`;

if(typeAge < 18 ) {
    ticketPrice = ((ticketPrice) - (ticketPrice * 0.2));
}

const price = document.getElementById("price");
price.innerHTML = `${ticketPrice}`;