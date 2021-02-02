const Atendimento = require("../models/atendimentos")

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('<h1>Você está olá na rota de atendimentos</h1>'))
    
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)
    })
}