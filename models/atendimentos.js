const conexao = require('../infra/conexao')

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimento, (error, resultados) => {
            if(error) console.log(error)
            else console.log(resultados)
        })
    }
}

module.exports = new Atendimento