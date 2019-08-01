console.log(this)

this.ola = 'Fala Pessoal' // formas de exportar modulos (arquivos de código) para serem usados em outros códigos.
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até próximo exemplo'

// observações: o this == exports == module.exports, são sinonimos

// USAR SEMPRE O "module.exports", padrão mais convencional e que possui menos bugs
// apenas o que exportamos com o "module.exports" é que estará visível para fora em outros módulos