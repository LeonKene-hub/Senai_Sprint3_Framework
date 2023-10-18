//EXERCICIO
//Criar uma destruturacao para um objeto filmes
//trazer somente 3 propriedades
//crie um arquivo a parte e tente executar sem consulta

let filmes = [
    filme1 = {
        titulo: "Trem Bala",
        genero: 'Acao',
        duracao: 113,
        visto: false
    },
    filme2 = {
        titulo: "Truque de mestre",
        genero: 'Aventura',
        duracao: 120,
        visto: true
    },
    filme3 = {
        titulo: "Annabele",
        genero: 'Terror',
        duracao: 98,
        visto: false
    },
    filme4 = {
        titulo: "Golpe Baixo",
        genero: 'Comedia',
        duracao: 84,
        visto: true
    }
]

//let { titulo, genero, duracao, visto } = filmes.find(f => f.genero === "Acao")

// console.log(`
//     Filme: ${titulo}
//     Genero: ${genero}
//     Duracao: ${duracao} minutos
//     Ja Assisti: ${visto ? "sim" : "nao"}
// `);

//================= CORRECAO DO PROFESSOR =================\\

filmes.forEach( ({titulo, genero}, i) => {
    console.log(`
        filme ${i + 1}: ${titulo.toUpperCase()}
        Genero: ${genero.toString()}
    `);
});