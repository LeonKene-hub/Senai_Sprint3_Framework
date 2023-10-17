const pessoas = ['Anna', 'Coral', 'Vinicius', "Demetrio", 'Evelyn', "Luis", "Lacerda"];

function carlos(pessoa) {
    console.log(`Bom dia ${pessoa}`);
};

//Funcao anonima
// pessoas.forEach(function (cadaPessoa) {
//         console.log(`Bom dia ${cadaPessoa}`);
//     });

//arrow functions
//pessoas.forEach(cadaPessoa => carlos(cadaPessoa));

// const dobro = (x) => {
//     return x * 2;
// }

// const dobro = x => x * 2;

// console.log(dobro(10));

const bomDia = () => "Bom dia!";
console.log(bomDia());