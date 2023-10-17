const numeros = [10, 12, 20];

const resultado = numeros.reduce((total, n) => {
    return total + n;
}, 0);

//console.log(resultado);

const produtos = [
    {produto: "Camiseta", preco: 51.90},
    {produto: "Tenis", preco: 119.90},
    {produto: "Jaqueta de couro", preco: 129.90}
];

let totProduto = produtos.reduce((vInicial, p) => {
    return vInicial + p.preco;
}, 0);

console.log(`o total de vendas foi ${totProduto.toFixed(2)}`);