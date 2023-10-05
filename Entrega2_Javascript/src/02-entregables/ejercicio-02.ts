console.log("************** DELIVERABLE 02 *********************");

// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = (a, b) => [...a, ...b]; // Implementation here.
const girlNames = ["Victoria", "Cristina", "Maria"];
const boyNames = ["Jorge", "Paco", "Pedro"];
const mixNames = ["Adrian", "Victoria"];

console.log(concat(girlNames, boyNames));

const restConcat = (...a) => {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    result = [...result, ...element];
  }
  return result;
};

const restConcatTwo = (...a) => a.reduce((result, element)=> [...result,...element],[])

console.log(restConcat(girlNames, boyNames, mixNames));

console.log(restConcatTwo(girlNames, boyNames, mixNames));