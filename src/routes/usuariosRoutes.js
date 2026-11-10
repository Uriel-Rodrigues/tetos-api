const { buscar, criar, editar, deletar } = require("../controllers/usuariosController");
const { usuarioAutenticado } = require("../middlewares/usuarioMiddlewares");

const rotas = require("express").Router();

rotas.get("/",
        /* 
      #swagger.tags = ['usuarios']
      #swagger.summary = 'Buscar'
      #swagger.description = 'Retorna um array de usuarios cadastrados'
      #swagger.responses[200] = {
          description: 'Lista de usuarios retornada com sucesso',
          schema: [{ 
            id: feg9500d-2829-4bj0-9058-b5588341cb9d, 
            nome: 'jamaia nicolas', 
            email: 'jamaiaMatos@email.com',
            nivel_id: "6cd868fb-bd03-4735-8001-8264ae912389"
            createdAt: '2026-11-09T00:00:00.000Z' 
            "nivel": {
                "nome": "admin"
            }   
        }]
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    usuarioAutenticado, buscar)
rotas.post("/",
        /* 
      #swagger.tags = ['usuarios']
      #swagger.summary = 'Criar'
      #swagger.description = 'Cria um novo usuario'
      #swagger.parameters['body'] = { 
          in: 'body', 
          required: true, 
          description: 'Dados para criação do usuario',
          schema: [{ 
            nome: 'nome',
            email: 'email',
            senha: 'senha',
            nivel_id: 'nivel_id' 
        }] 
      }
      #swagger.responses[201] = {
          type: 'success'
          description: 'Registro criado com sucesso',
      }
      #swagger.responses[400] = {
          description: 'Dados inválidos ou faltando'
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    criar)
rotas.put("/:id",
        /* 
      #swagger.tags = ['usuarios']
      #swagger.summary = 'Editar'
      #swagger.description = 'Edita um usuario existente pelo ID'
      #swagger.parameters['id'] = {
          in: 'path', 
          required: true, 
          type: 'string',
          description: 'ID do nível (UUID)'
      }
      #swagger.parameters['body'] = { 
          in: 'body', 
          required: true, 
          description: 'Novos dados do usuario',
          schema: [{ 
              nome: 'nome',
              email: 'email',
              senha: 'senha' 
            }] 
      }
      #swagger.responses[200] = {
          type: 'success',
          description: 'Registro atualizado com sucesso',
      }
      #swagger.responses[400] = {
          description: 'Dados inválidos'
      }
      #swagger.responses[404] = {
          description: Registro não encontrado'
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    editar)
rotas.delete("/:id",
        /* 
      #swagger.tags = ['usuarios']
      #swagger.summary = 'Deletar'
      #swagger.description = 'Remove um usuario pelo ID'
      #swagger.parameters['id'] = {
          in: 'path', 
          required: true, 
          type: 'string',
          description: 'ID do usuario que será deletado'
      }
      #swagger.responses[204] = {
          description: 'Registro deletado com sucesso'
      }
      #swagger.responses[404] = {
          description: 'Registro não encontrado'
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    deletar)

module.exports = rotas
