const express = require("express");
const cors = require("cors")

const app = express();
const niveisRoutes = require("./src/routes/niveisRoutes")

app.use(cors()); //permite que a api receba requisições externas
app.use(express.json()); //transforma o JSON do corpo da requisição em js

app.get("/", (req, res) => {
    res.send("ola mundo");
});

app.use("/niveis", niveisRoutes)

app.listen(3000, () => {
    console.log("servidor on: http://localhost:3000");
})