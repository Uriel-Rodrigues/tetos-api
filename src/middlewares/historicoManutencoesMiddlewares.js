function validarDados(req, res, next) {
    const colunas = [
        "descricao", 
        "valor", 
        "data", 
        "imovel_id"
    ];
    const dados = req.body;
    let campoAusentes = colunas.filter(chave => !Object.keys(dados).includes(chave));

    if(campoAusentes.length > 0){
        res.json(campoAusentes.map(campo => {
            return {
                type: "warning",
                description: `Coluna ${campo} não informada`
            }
        }))
    
        next();

    }
}

module.exports = {
    validarDados
}