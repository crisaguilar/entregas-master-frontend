console.log("************** DELIVERABLE 01 *********************");
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
const names = ["Alex", "Cristina", "Adrian", "Pedro"];
const head = ([first]) => first; // Implementation here.
console.log(head(names));

// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const cities = [
  "Málaga",
  "granada",
  "Sevilla",
  "Cadíz",
  "Almeria",
  "Jaén",
  "Huelva",
];
const init = ([first, ...others]) => others; //
console.log(init(cities));

// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const numbersArray = [1, 2, 3, 4, 5];
const last = (array) => array.slice(-1);
console.log(last(numbersArray));
