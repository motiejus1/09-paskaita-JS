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

zmogus1.vardas = "Pakeistas vardas";
zmogus1.pavarde = "Pakeista pavarde";

console.log(zmogus1);


//zinau zmogus3 yra objektas, bet as nezinau jo kintamuju
let zmogus3 =  {
    vardas: "Vardas1", 
    pavarde: "Pavarde2", 
    asmensKodas: "12345678910", 
    metai: 880, 
    "vardas-pavarde": "Motiejus",
    apibundinimas: ['aukstas', 'protingas', 'turtingas']
}

console.log(zmogus3.apibundinimas);
console.log(zmogus3.metai);

zmogus3['naujas-raktas'] = "Pridejau nauja objekto rakto reiksme";
zmogus3.tautybe = "Lietuvis";

for(let i in zmogus3) {
    // console.log("Raktas: " + i);
    // console.log("Reiksme: " +zmogus3[i]);
}

let zmogus4 = {};

zmogus4.vardas = "Vardas4";
zmogus4.pavarde = "Pavarde4";
zmogus4['apibudinimas'] = ['neaukstas', "turtingas"];

console.log(zmogus4);



let zmogus6 = {
    vardas: "Vardas6", 
    pavarde: "Pavarde6", 
    asmensKodas: "12345678910", 
    metai: 880, 
    "vardas-pavarde": "Motiejus",
    apibundinimas: ['aukstas', 'protingas', 'turtingas'],
    dirbti: function() {
        return "Netrukdyk, dirbu";
    },
    prisistatyk: function() {
        return this.vardas + " " + this.pavarde + " " + this.asmensKodas; //varda, pavarde ir asmens koda
    }
};



console.log(zmogus6.dirbti());
console.log(zmogus6.prisistatyk());

// Sudeti, atimti, padauginti, padalinti du skaicius. Objektiniu principu


// console.log(document.getElementById("sk1"));

document.getElementById("sk1")

const skaiciuotuvas = {
    sk1: 5,
    sk2: 4,
    sudetis: function() {
        let suma;
        suma= this.sk1 + this.sk2;
        return suma;
    },
    atimtis: function() {
        let atimtis;
        atimtis= this.sk1 - this.sk2;
        return atimtis;
    },

    daugyba: function() {
        let daugyba;
        daugyba= this.sk1 * this.sk2;
        return daugyba;
    },

    dalyba: function() {
        let dalyba;
        dalyba= this.sk1 / this.sk2;
        return dalyba;
    },

    rezultatas: function() {
        console.log(this.sudetis());
        console.log(this.atimtis());
        console.log(this.daugyba());
        console.log(this.dalyba());
        // return
    }
};


skaiciuotuvas.rezultatas();

// console.log(aritmetika.sudetis());
// console.log(aritmetika.atimtis());
// console.log(aritmetika.daugyba());
// console.log(aritmetika.dalyba());

//100 zmoniu, ismoko programuot