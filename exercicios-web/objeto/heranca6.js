function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {} // cria um novo
    obj.__proto__ = f.prototype // o obj funciona como o this, e aí aplicamos o prototype da funcao passada, f, como o prototipo do novo objeto
    f.apply(obj, params) // a partir do operador spread ..., atribuimos um array de parametros a params.
    return obj // retornamos o novo objeto
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)