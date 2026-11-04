const PRISMA = require("../services");

// buscar registros na tabela locatarios 
async function buscar (req, res) {
    try {
        const linhas = await PRISMA.locatarios.findMany();
        res.json(linhas)

    } catch (error) {        
        res.json({
            type: "error",
            description: error.message
        })
        
    }
}

// criar registros na tabela locatarios 
async function criar (req, res) {
    try {
        const {nome, telefone, cpf_cnpj} = req.body;
        const sql = await PRISMA.locatarios.create({
            data:{
                nome: nome,
                telefone: telefone,
                cpf_cnpj: cpf_cnpj,
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

// editar registros na tabela locatarios 
async function editar (req, res) {
    try {
        const dados = req.body;
        const {id} = req.params
        const sql = await PRISMA.locatarios.update({
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

// deletar registros na tabela locatarios 
async function deletar (req, res) {
    try {
        const {id} = req.params
        const sql = await PRISMA.locatarios.delete({
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