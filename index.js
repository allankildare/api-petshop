const customExpress = require('./config/customExpress')
const port = 8080
const app = customExpress()
app.listen(port, () => console.log(`Servidor rodando na porta http://localhost:${port}`))