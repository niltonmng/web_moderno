const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))
console.log()

console.log(produtos.filter(function(p) {
    return p.preco > 4000 // sem a arrow function, é necessário adicionar no retorno a condição que se espera no filtro
}))
console.log()

console.log(produtos.filter( produto => produto.preco > 13)) // mais simples com a arrow function
console.log()

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))