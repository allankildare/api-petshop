const customExpress = require("./config/customExpress")
const port = 8080
const conexao = require("./infra/conexao")
const Tabelas = require("./infra/tabelas")

conexao.connect((error) => {
  if (error) console.log(error);
  else {
    console.log("Conectado com sucesso!!!")
    Tabelas.init(conexao)
    const app = customExpress()
    app.listen(port, () =>
      console.log(`Servidor rodando na porta http://localhost:${port}`)
    )
  }
})
