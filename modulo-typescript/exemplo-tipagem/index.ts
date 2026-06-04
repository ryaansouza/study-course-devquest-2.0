// const nome = "Beto";
let nome: string = "Beto";

// let idade = 42;
let idade: number = 42;

// const mandouEmail = true;
let mandouEmail: boolean = true;

let idades: number[] = [12, 22, 39];
let nomes: string[] = ['Roberto', 'Ricardo', 'Raphael'];
let idadesArray: Array<number> = [12, 22, 39];

let obj: any = {x:0};

function imprimirCoordenadas(pt: { x: number; y: number }) {
 console.log("The coordinate's x value is " + pt.x);
 console.log("The coordinate's y value is " + pt.y);
}
imprimirCoordenadas({ x: 3, y: 7 });