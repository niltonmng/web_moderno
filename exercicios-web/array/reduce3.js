Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))


//======================================== planejamento de investimentos
let acum = 2000
let depositoAnual = 32220.4
let anos = 17
for(let i = 0; i < anos; i++) {
    acum = acum + depositoAnual + (acum*0.07)
    let novo = acum
    console.log(`${i+1}) R$ ${novo} | R$ ${novo*0.07} `)
}
console.log(20000*12)
console.log(((20000*12) - (20000*12*0.27) - 32220.4)/12)
console.log(100*((1+0.07)**30))
console.log(1600*12)