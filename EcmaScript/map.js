const numeros = [1,2,5,10,300];

// const arrDobro = numeros.map( (n) => {
//     return n *2;
// });

//console.log(numeros);
//console.log(arrDobro);

let nomes = ["Gabriel", "Pedro", "Rubens", "Andre", "Julia"];
let sobrenomes = ["Russo","Henrique","Moura", "Silva","Athar"];

let nomeCompleto = nomes.map((nome,i) => {
    return `${nome} ${sobrenomes[i]}`
});

console.log(nomeCompleto);