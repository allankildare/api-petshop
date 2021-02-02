const moment = require("moment")
const conexao = require('../infra/conexao')

class Atendimento {
    adiciona(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimento, (error, resultados) => {
            if(error) console.log(error)
            else console.log(resultados)
        })
    }
}

module.exports = new Atendimento