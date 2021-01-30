const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => console.log(`Servidor rodando na porta http://localhost:${port}`))
app.get('/atendimentos', (req, res) => res.send('<h1>Você está na rota de atendimentos</h1>'))