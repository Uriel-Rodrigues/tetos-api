const PRISMA = require("../services");

// buscar registros na tabela niveis 
async function buscar (req, res) {
    try {
        const linhas = await PRISMA.niveis.findMany();
        
        res.json(linhas)

    } catch (error) {        
        res.json({
            type: "error",
            description: error.message
        })
        
    }
}

// criar registros na tabela niveis 
async function criar (req, res) {
    try {
        const {nome} = req.body;
        const sql = await PRISMA.niveis.create({
            data:{
                nome: nome
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
// editar registros na tabela niveis 
async function editar (req, res) {
    try {
        const {nome} = req.body;
        const {id} = req.params
        const sql = await PRISMA.niveis.update({
            where: {id},
            data:{
                nome: nome
            }
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
// deletar registros na tabela niveis 
async function deletar (req, res) {
    try {
        const {id} = req.params
        const sql = await PRISMA.niveis.delete({
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