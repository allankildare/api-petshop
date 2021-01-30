const mySQL = require("mysql")

const conexao = mySQL.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'senhasegura',
    database: 'agenda-petshop'
})

module.exports = conexao