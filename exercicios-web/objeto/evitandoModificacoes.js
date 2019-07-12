// Object.preventExtensions
const produto = Object.preventExtensions({ // método que previne adição de novos elementos no objeto, apenas permite editar e excluir
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // método que previne adição e remoção de novos elementos no objeto, apenas permite editar
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes // método que previne adição, remoção e edição de elementos no objeto