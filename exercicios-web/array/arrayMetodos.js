const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro! remove o ultimo elemento da lista
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista!
console.log(pilotos)

pilotos.unshift('Hamilton') // contrariamento ao shift, este add um elemento no indice zero do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array, cortado a partir do index passado como parâmetro
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // importante notar que ele vai do index 1 ao 4, sendo que o 4 não é incluso
console.log(algunsPilotos2)