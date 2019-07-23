const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', { // método defineProperty define uma propriedade de um objeto
    value: function() { return Object.values(this) }, // no caso, o primeiro parametro é o objeto, segundo é o nome da propriedade
    enumerable: false // o terceiro é um objeto contendo os valores {value, enumerable, ...} ou as subpropriedades da propriedade
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)