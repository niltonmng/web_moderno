// associado ao map temos uma laço associado, e ele serve pra fazer uma transformação no array
// a ideia é mapear um array para um outro array do mesmo tamanho, só que com os mesmos dados transformados
// map NAO TRANSFORMA o array atual, ele gera um NOVO ARRAY

const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

let novoResultado = nums.map(e => e * 2) // mais simples

console.log(resultado)
console.log(novoResultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)