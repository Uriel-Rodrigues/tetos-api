const PRISMA = require("../services");

// buscar registros na tabela usuarios 
async function buscar (req, res) {
    try {
        const linhas = await PRISMA.usuarios.findMany({
            include: {
                niveis: true
            }
        });

        
        
        res.json(linhas)

    } catch (error) {        
        res.json({
            type: "error",
            description: error.message
        })
        
    }
}

// criar registros na tabela usuarios 
async function criar (req, res) {
    try {
        const {nome, email, senha, niveis_id} = req.body;
        const sql = await PRISMA.usuarios.create({
            data:{
                nome: nome,
                email: email,
                senha: senha,
                niveis_id: niveis_id
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

// editar registros na tabela usuarios 
async function editar (req, res) {
    try {
        const dados = req.body;
        const {id} = req.params
        const sql = await PRISMA.usuarios.update({
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

// deletar registros na tabela usuarios 
async function deletar (req, res) {
    try {
        const {id} = req.params
        const sql = await PRISMA.usuarios.delete({
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