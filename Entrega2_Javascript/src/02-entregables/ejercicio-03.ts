console.log("************** DELIVERABLE 03 *********************");
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

const student = {
  name: "Raul",
  surname: "Aguilar",
  country: "Spain",
};

const a = {
  name: "Maria",
  surname: "Ibañez",
  country: "SPA",
};
const b = {
  name: "Luisa",
  age: 31,
  married: true,
};

function clone(source) {
  return { ...source };
}

console.log(clone(student));

// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

function merge(source, target) {
  return { ...target, ...source };
}

console.log(merge(a, b));
