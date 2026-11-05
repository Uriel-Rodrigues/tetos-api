const PRISMA = require("../services");

// buscar registros na tabela imoveis 
async function buscar (req, res) {
    try {
        const linhas = await PRISMA.imoveis.findMany();
        res.json(linhas)

    } catch (error) {        
        res.json({
            type: "error",
            description: error.message
        })
        
    }
}

// criar registros na tabela imoveis 
async function criar (req, res) {
    try {
        const dados = req.body;
        const sql = await PRISMA.imoveis.create({
            data:{
                dados: {
                    ...dados,
                    quartos:Number(dados.quartos),
                    banheiros:Number(dados.banheiros),
                    suites:Number(dados.suites),
                    garagens:Number(dados.garagens),
                    metragem:Number(dados.metragem),
                    valor_aluguel:Number(dados.valor_aluguel),

                }
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

// editar registros na tabela imoveis 
async function editar (req, res) {
    try {
        const dados = req.body;
        const {id} = req.params
        const sql = await PRISMA.imoveis.update({
            where: {id},
            data:dados
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

// deletar registros na tabela imoveis 
async function deletar (req, res) {
    try {
        const {id} = req.params
        const sql = await PRISMA.imoveis.delete({
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