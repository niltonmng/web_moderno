let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())

function sockMerchant(n, ar) {
    let lista = [n]
    lista = ar.split(" ")
    console.log(lista)
    let cont = 0
    for (let i = 0; i < lista.length; i++) {
        
    }
    return cont
}

console.log(sockMerchant(9,"10 20 20 10 10 30 50 10 20"))