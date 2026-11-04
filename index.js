const express = require("express");
const cors = require("cors")
const niveisRoutes = require("./src/routes/niveisRoutes")
const imoveisTipoRoutes = require("./src/routes/imoveisTipoRoutes")
const usuariosRoutes = require("./src/routes/usuariosRoutes")
const locatariosRoutes = require("./src/routes/locatariosRoutes")
const {login} = require("./src/controllers/usuariosController")

const app = express();

app.use(cors()); //permite que a api receba requisições externas
app.use(express.json()); //transforma o JSON do corpo da requisição em js

app.get("/", (req, res) => {
    res.send("ola mundo");
});

app.post("/login", login)

app.use("/niveis", niveisRoutes)
app.use("/imoveis-tipo", imoveisTipoRoutes)
app.use("/usuarios", usuariosRoutes)
app.use("/locatarios", locatariosRoutes)


app.listen(3000, () => {
    console.log("servidor on: http://localhost:3000");
})