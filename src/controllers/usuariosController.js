const PRISMA = require("../services");
const bcrytpt = require("bcrypt")
const jwt = require("jsonwebtoken")

// buscar registros na tabela usuarios 
async function buscar (req, res) {
    try {
        const {senha} = req.body
        const linhas = await PRISMA.usuarios.findMany({
            include: {
                nivel: {
                    select: {
                        nome: true
                    }
                }
            }, omit:{ //permite omitir um determinado campo
                senha:true
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
        let {nome, email, senha, nivel_id} = req.body;

        senha = await bcrytpt.hash(senha, 10)

        const sql = await PRISMA.usuarios.create({
            data:{
                nome: nome,
                email: email,
                senha: senha,
                nivel_id: nivel_id
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

        //criptografia de senha antes de atualizar 
        if(dados.senha){
            dados.senha = await bcrytpt.hash(dados.senha, 10)
        }

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

// rota para login do usuario 
async function login (req, res){
    try {

        const {email, senha} = req.body

        let usuario = await PRISMA.usuarios.findFirst({
            where: {
                email: email
            }
        });

        //valida o usuario pelo email caso nao esxista para o processo retorna 
        if(!usuario){
            res.json ({
                type: "warning",
                description: "email ou senha incorretos"
            })
            return
        }

        //compara a senhaencaminhada pelo usuario com a senha registrada no banco 
        let senhaValida = await bcrytpt.compare(senha, usuario.senha)

        //valida a senha se a comparação bate a senha encmainha com a que existe no banco
        if(!senhaValida) {
            res.json({
                type: "warning",
                description: "emailou senha incorretos"
            });
            return;
        }

        delete usuario.senha // deleta a senha antes de retornar os dados do susuario 

        //gera o toen para o usuario logo apos buscar os dados no banco recebe 3 parametros
        let token = jwt.sign({id: usuario.id}, process.env.SEGREDO, {expiresIn:"1h"})

        res.json({
            type: "success",
            description: "login realizado com sucesso",
            usuario,
            token // mandando token no retorno de dados 
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
    deletar,
    login
}