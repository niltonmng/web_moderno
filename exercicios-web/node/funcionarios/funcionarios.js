const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // axios é um cliente http, ele faz requisições de algo que está remoto
// neste sentido, pegamos as informações da url passada com o axios e a atribuimos a uma variável.

const chineses = chines => chines.pais === 'China'
const mulheres = femea => femea.genero === 'F'
const menor = (funcionario, funcionarioAtual) => {
    return (funcionario.salario < funcionarioAtual.salario) ? funcionario : funcionarioAtual
}

const id = (func, funcAtual) => { // filtro para o id especifico CURIOSIDADE
    return (func.id == 284) ? func : funcAtual
}

// (busca por menor salário) mulher chinesa com menor salário?
axios.get(url).then( response => { 
    const funcionarios = response.data 
    const menorSalario = funcionarios
            .filter(chineses)
            .filter(mulheres)
            .reduce(menor)
    console.log(menorSalario)
})

// busca por id especifico
axios.get(url).then( response => { 
    const funcionarios = response.data 
    const funcionario = funcionarios.reduce(id)
    console.log(funcionario)
})

// const chineses = f => f.pais === 'China'
// const mulheres = f => f.genero === 'F'
// const menorSalario = (func, funcAtual) => {
//     return func.salario < funcAtual.salario ? func : funcAtual
// }

// axios.get(url).then(response => {      // método get pega as informações do servidor, método then faz algo com as informações passadas do get
//     const funcionarios = response.data // response é o valor que contem as informações vindas do servidor, data são os dados
//     // console.log(funcionarios)

//     // mulher chinesa com menor salário?
//     const func = funcionarios
//         .filter(chineses)
//         .filter(mulheres)
//         .reduce(menorSalario)

//     console.log(func)
// })

