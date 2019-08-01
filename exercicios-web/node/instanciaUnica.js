// node faz cache
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}

/* Neste modelo, o node faz cache da
instancia chamada, logo
sem instanciarmos duas variaveus
a partir deste modulo, 
ele irá passar as informações
de um para o outro, e o 
controle será menor
*/