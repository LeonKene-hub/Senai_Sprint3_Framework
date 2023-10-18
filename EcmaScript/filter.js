const numeros = [1, 2, 200, 10, 7, 12, 15, 8];

//console.log(numeros);

const nMenor10 = numeros.filter( n => {
    return n < 10;
});

//console.log(nMenor10);

const comentarios = [
    {comentario: "bla bla bla", exibe: true},
    {comentario: "Evento e uma merda", exibe: false},
    {comentario: "otimo evento", exibe: true}
];

const comentarioOK = comentarios.filter( c => {
    return c.exibe === true;
})

console.log(comentarioOK);