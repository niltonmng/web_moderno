const fs = require('fs') // modulo responsável por leitura/escrita de arquivos do node (IO) 

const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8') // dessa forma ele fica travado, e só quando terminar de ler esse arquivo é que atende ás outras requisições
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => { // assincrono é mais eficiente
    const config = JSON.parse(conteudo) // tem que dar o parse do conteúdo, pois o q foi lido está em formato JSON, logo precisa ser transformado em objeto
    console.log(`${config.db.host}:${config.db.port}`)
})

// forma simplificada de fazer o código assincrono
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})