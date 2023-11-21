console.log("\nTrabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
listaDeDestinos.push(`Curitiba`,); //adicionando um item na lista

const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\nDestinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador<4){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
};

console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!!");
}
else{
    console.log("Desculpe, tivemos um erro!");
};

// for(let i = 0 ;i<3 ; i++ ){
//     if(listaDeDestinos[i] == destino){
//         destinoExiste = true;
//         break;
//     }
// };
//aprendendo o "for"