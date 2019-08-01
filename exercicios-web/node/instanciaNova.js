// Uma factory retorna um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}

/* neste modelo, temos maior controle
pois sempre retornamos uma
funcao que retorna
um objeto, assim, 
mantendo o valor do contador 
independente para cada variável.
*/ 