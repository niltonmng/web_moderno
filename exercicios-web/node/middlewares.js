// middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => { //  uma funcao que recebe um 'contexto' (objeto) e uma funcao, faz suas modificações e no fim, chama a next.
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => { // ctx é o objeto, ...middlewares é um array de funcoes que serão executadas no next
    const execPasso = indice => { // uma funcao recursiva que itera sobre todas a chamadas do chain of responsability
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)