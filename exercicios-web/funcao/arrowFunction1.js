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
    lista = ar.split(" ")
    let cont = 0
    for (let i = 0; i < lista.length; i++) {
        let testado = lista[i] 
        for (let j = i+1; j < lista.length; j++) {
            if(testado !== '0'){
                if(testado === lista[j]) {
                    cont++
                    lista[i] = '0'
                    lista[j] = '0'
                    break
                }
            }
        }
    }
    return cont
}

console.log(sockMerchant(9,"10 20 20 10 10 30 50 10 20"))

function twoStrings(s1, s2) {
    let flag = false
    let cont  = 0
    if(s2.length > s2.length) {
        cont = s1.length
    }
    else {
        cont = s2.length
    }
    for (let i = 0; i < s1.length; i++) {
        let letra = s1[i]
        for (let j = 0; j < s2.length; j++) {
            if(letra === s2[j]){
                flag = true
            }
        }
    }

    if(flag) {
        return "YES"
    } else {
        return "NO"
    }
}

console.log(twoStrings("helo", "world"))