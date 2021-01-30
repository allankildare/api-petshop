const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => console.log(`Servidor rodando na porta http://localhost:${port}`))
app.get('/', (req, res) => res.send('<h1>Servidor rodando, tudo ok</h1>'))