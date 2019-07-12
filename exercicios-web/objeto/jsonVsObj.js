const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // método que permite transformar objetos JS em JSON. Formato de String JSON.
// vale lembrar que funcoes nao entram em JSON

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // transformamos o JSON diretamente em um objeto JS, note que nao vem com funcoes da mesma forma, visto que formato JSON não suporta funcoes
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

// USAR O JSON VALIDATOR. IGUAL O BIBTEX VALIDATOR