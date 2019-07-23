const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) { // a funcao callback que passamos para um FOREACH recebe 3 PARAMETROS, o NOME, INDICE e ARRAY
    console.log(`${indice + 1}) ${nome}`)
})

console.log()

aprovados.forEach(elemento => console.log(elemento))

console.log()

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

//==============================================
console.log()
const numeros = [2,2,2,2,2,2,2]
let sum = 0
numeros.forEach((nome, indice, array, x) => {
    nome = nome * 2
    sum += nome
    console.log(`${indice}) ${nome} ${array} ${x}`)
})

console.log(sum)