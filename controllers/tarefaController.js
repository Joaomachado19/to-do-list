const Tarefa = require("../models/tarefaModel.js");
const DB = require("../models/dbModel.js");

async function getTarefas(req, res) {
  const tarefas = await DB.findAll(process.env.DB_COLLECTION);
  res.render("tarefaView", { tarefas });
}
async function addTarefa(req, res) {
  const { title, description } = req.body;
  const tarefa = new Tarefa(new Date().toLocaleString("pt-br"),title,description);
 
  await DB.insertOne(process.env.DB_COLLECTION,tarefa);

  res.redirect("/");
}
module.exports = {getTarefas, addTarefa};
