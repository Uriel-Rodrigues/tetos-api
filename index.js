const express = require("express");
const cors = require("cors")
const niveisRoutes = require("./src/routes/niveisRoutes")
const imoveisTipoRoutes = require("./src/routes/imoveisTipoRoutes")
const usuariosRoutes = require("./src/routes/usuariosRoutes")
const locatariosRoutes = require("./src/routes/locatariosRoutes")
const imoveisRoutes = require("./src/routes/imoveisRoutes")
const {login} = require("./src/controllers/usuariosController");
const { usuarioAutenticado } = require("./src/middlewares/usuarioMiddlewares");

const app = express();

app.use(cors()); //permite que a api receba requisições externas
app.use(express.json()); //transforma o JSON do corpo da requisição em js

app.get("/", (req, res) => {
    res.send("ola mundo");
});

app.post("/login", login)

app.use("/niveis",usuarioAutenticado, niveisRoutes)
app.use("/imoveis-tipo",usuarioAutenticado, imoveisTipoRoutes)
app.use("/usuarios",usuarioAutenticado, usuariosRoutes)
app.use("/locatarios",usuarioAutenticado, locatariosRoutes)
app.use("/imoveis",usuarioAutenticado, imoveisRoutes)


app.listen(3000, () => {
    console.log("servidor on: http://localhost:3000");
})