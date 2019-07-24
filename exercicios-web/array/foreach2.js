Array.prototype.forEach2 = function(callback) { // no prototype de Array, adicionei uma funcao forEach2 que recebe uma funcao callback
    for (let i = 0; i < this.length; i++) { // como parametro, essa callback recebe 3 parametros (elemento ou nome, indice e array completo)
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome} | ${array}`)
})
