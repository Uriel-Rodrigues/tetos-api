const PRISMA = require("../services");

// buscar registros na tabela historico_manutencoes 
async function buscar (req, res) {
    try {
        const linhas = await PRISMA.historico_manutencoes.findMany()

        res.json(linhas)

    } catch (error) {        
        res.json({
            type: "error",
            description: error.message
        })
        
    }
}

// criar registros na tabela historico_manutencoes 
async function criar (req, res) {
    try {
        
        let {descricao, valor, data, imovel_id} = req.body;

        const sql = await PRISMA.historico_manutencoes.create({
            data:{
                descricao: descricao,
                valor: valor,
                data: new Date(`${data}`),
                imovel_id: imovel_id
            }
        })

        res.json({
            type: "success",
            description: "registro criado com sucesso"
        })

    } catch (error) {        
        res.json({
            type: "error",
            description: error.message
        })
        
    }
}

// editar registros na tabela historico_manutencoes 
async function editar (req, res) {
    try {
        const {descricao, valor, data, imovel_id} = req.body;
        const {id} = req.params

        const sql = await PRISMA.historico_manutencoes.update({
            where: {id},
            data: {
                descricao: descricao,
                valor: valor,
                data: new Date(`${data}`)            }
        })

        res.json({
            type: "success",
            description: "registro editado com sucesso"
        })

    } catch (error) {        
        res.json({
            type: "error",
            description: error.message
        })
        
    }
}

// deletar registros na tabela historico_manutencoes 
async function deletar (req, res) {
    try {
        const {id} = req.params
        const sql = await PRISMA.historico_manutencoes.delete({
            where: {id},
        })

        res.json({
            type: "success",
            description: "registro deletado com sucesso"
        })

    } catch (error) {        
        res.json({
            type: "error",
            description: error.message
        })
        
    }
}

module.exports = {
    buscar,
    criar,
    editar,
    deletar
}