//resalizar import nativo de biblioteca para realizar o deletar das ima
const fs = require("fs")



function validarDados(req, res, next) {
    const colunas = [
        "logradouro",
        "bairro",
        "cidade",
        "estado",
        "numero",
        "cep",
        "valor_aluguel",
        "metragem",
        "quartos",
        "suites",
        "banheiros",
        "tipo_id"
    ];
    const dados = req.body;
    let campoAusentes = colunas.filter(chave => !Object.keys(dados).includes(chave));

    if(campoAusentes.length > 0){

        //remove a imagem em casos de campos faltando dentro da requisição 
        fs.unlinkSync(req.file.path);


        res.json(campoAusentes.map(campo => {
            return {
                type: "warning",
                description: `Coluna ${campo} não informada`
            }
        }))
    }
    next();
}

module.exports = {
    validarDados
}