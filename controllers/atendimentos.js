module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('<h1>Você está olá na rota de atendimentos</h1>'))
    app.post('/atendimentos', (req, res) => res.send('POST: Você está na rota de atendimentos'))
}