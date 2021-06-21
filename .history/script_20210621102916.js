"use strict";

let zmogusVardas;
let zmogusPavarde;

zmogusVardas="Vardas"; // string kintamasis
zmogusPavarde="Pavarde";


let zmogus;

zmogus = {
    vardas: "Vardas",
    pavarde: "Pavarde",
    asmensKodas: "123456789",
    metai: "80",
    "vardas-pavarde": "Motiejus Baliukonis"

};

console.log(zmogus);

console.log(zmogus.vardas);
console.log(zmogus["vardas"]);

console.log(zmogus.pavarde);
console.log(zmogus["pavarde"]);

// console.log(zmogus.vardas-pavarde);
console.log(zmogus["vardas-pavarde"]);

// const zmogus1;

const zmogus1 = { 
    vardas: "Vardas1", 
    pavarde: "Pavarde2", 
    asmensKodas: "12345678910", 
    metai: "880", 
    "vardas-pavarde": "Motiejus"
}

console.log(zmogus1);

//100 zmoniu, ismoko programuot