const moduloA = require('./moduloA.js') // todo o código/módulo do moduloA.js esta armazenada nessa constante moduloA
const moduloB = require('./moduloB.js') // da mesma forma para o moduloB
// sempre que quiser usar outro módulo tem que usar o require()

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)