const express = require("express");
const cors = require("cors")
const niveisRoutes = require("./src/routes/niveisRoutes")
const imoveisTipoRoutes = require("./src/routes/imoveisTipoRoutes")
const usuariosRoutes = require("./src/routes/usuariosRoutes")
const locatariosRoutes = require("./src/routes/locatariosRoutes")
const imoveisRoutes = require("./src/routes/imoveisRoutes")
const historicoManutencoes = require("./src/routes/historicoManutencoesRoutes")
const historicoImovel = require("./src/routes/historicoImovelRoutes")
const {login} = require("./src/controllers/usuariosController");
const { usuarioAutenticado } = require("./src/middlewares/usuarioMiddlewares");

//linhas copiasdad swagger-ui-expres
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/docs/swagger-output.json');

const app = express();

app.use(cors()); //permite que a api receba requisições externas
app.use(express.json()); //transforma o JSON do corpo da requisição em js

//na rota rais redirecionamos diretamente para a pagina da documentação
app.get("/", (req, res) => {
    res.redirect("/docs");
});
//linhas copiasdad swagger-ui-expres
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post("/login", login)

app.use("/niveis",usuarioAutenticado, niveisRoutes)
app.use("/imoveis-tipo",usuarioAutenticado, imoveisTipoRoutes)
app.use("/usuarios",usuarioAutenticado, usuariosRoutes)
app.use("/locatarios",usuarioAutenticado, locatariosRoutes)
app.use("/imoveis",usuarioAutenticado, imoveisRoutes)
app.use("/historico-manutencoes",usuarioAutenticado, historicoManutencoes)
app.use("/historico-imovel",usuarioAutenticado, historicoImovel)


app.listen(3000, () => {
    console.log("servidor on: http://localhost:3000");
})