const fs = require('fs')  // modulo responsável por leitura/escrita de arquivos do node (IO) 
// para persistir arquivos (guardar sempre em JSON)

const produto = {
    nome: 'Xiaomi Mi 9',
    preco: 2449.99,
    desconto: 0.15
}

const certificados = {
    node: 15.5,
    huawei: 38,
    java_completo: 41.5,
    leo_1: 13.5,
    python: 55,
    r: 6,
    react_vtex: 4
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { // nesta callback apenas retornamos o erro
    console.log(err || 'Arquivo salvo!') // em JS temos conversões automáticas para true e false, e se nao houver erro, ele é null, convertendo o null pra false, logo, uma string é true e ele imprime o que for true
})



fs.writeFile(__dirname + '/saida.json', JSON.stringify(certificados), err => {
    console.log(err || 'Arquivo salvo!')
})

// ================= entrada de dados ========================
const entrada = __dirname + '/saida.json'
fs.readFile(entrada, 'utf-8', (err, conteudo) => { 
    console.log(conteudo)
    const config = JSON.parse(conteudo)
    console.log(`${config.node + config.huawei + config.python + config.r + config.react_vtex + config.leo_1 + config.java_completo}`)
})