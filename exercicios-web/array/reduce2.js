const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const bolsista = aluno => aluno.bolsista
console.log(alunos.map(bolsista).reduce(todosBolsistas))
// ou
const bolsas = alunos.map(aluno => aluno.bolsista)
const tudoBolsista = bolsas.reduce((acum, atual) => acum && atual)
console.log(tudoBolsista)

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))