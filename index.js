require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000
const tarefaController = require("./controllers/tarefaController.js")

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.get('/', tarefaController.getTarefas)
app.post('/', tarefaController.addTarefa)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});
