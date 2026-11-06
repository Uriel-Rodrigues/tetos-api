const { buscar, criar, editar, deletar } = require("../controllers/historicoManutencoesController");
const { validarDados } = require("../middlewares/historicoManutencoesMiddlewares");

const rotas = require("express").Router();

rotas.get("/", buscar)
rotas.post("/",validarDados, criar)
rotas.put("/:id",validarDados, editar)
rotas.delete("/:id", deletar)

module.exports = rotas
