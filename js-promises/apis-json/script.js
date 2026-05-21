const heroObject = {
    name: "Homem de ferro",
    age: 48,
    hasPowers: false
};

console.log(heroObject.name);
console.log(typeof heroObject);

// isso é um json

const heroJson = '{ "name": "Homem de ferro", "age": 48, "hasPowers": false }';

//transforma json em objeto

const hero = JSON.parse(heroJson);
console.log(hero.name);

//tranforma objeto em json

const heroString = JSON.stringify(hero);
console.log(heroString);
