class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro { // classe me JS que se torna por tras dos panos uma funcao
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) { // os tres pontos "..." sao o operador spread e são precedidos de um nome que atribui um array, no caso lancamentos se torna um array de elementos
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach( l => {
            valorConsolidado += l.valor
            console.log(`${l.nome} R$ ${(l.valor).toFixed(2)}`)
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

console.log(`( Salário total R$ ${salario.valor.toFixed(2)}
Total de todos os lançamentos R$ ${contas.sumario().toFixed(2)} )`)