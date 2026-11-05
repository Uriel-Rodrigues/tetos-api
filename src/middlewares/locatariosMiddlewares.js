function validarDados (req, res, next){
    const {nome,telefone, cfpf_cnpj} = req.body;

    if(!nome) {
        res.json({
            type: "warning",
            description: "coluna nome nao informada"
        })
    }
    if(!telefone) {
        res.json({
            type: "warning",
            description: "coluna telefone nao informada"
        })
    }
    if(!cfpf_cnpj) {
        res.json({
            type: "warning",
            description: "coluna cfpf_cnpj nao informada"
        })
    }
    
    next();
}

module.exports = {
    validarDados
}