const { buscar, criar, editar, deletar } = require("../controllers/imoveisTipoController");
const { validarDados } = require("../middlewares/imoveisTipoMiddlewares");

const rotas = require("express").Router();

rotas.get("/",
        /* 
      #swagger.tags = ['imoveis-tipo']
      #swagger.summary = 'Buscar'
      #swagger.description = 'Retorna um array de imoveis-tipo cadastrados'
      #swagger.responses[200] = {
          description: 'Lista de imoveis-tipo retornada com sucesso',
          schema: [{ 
            id: '92cf6d93-5df2-4a1c-93ca-e64a61843608',
            nome: 'casa',
            createdAt: '2026-11-05T14:14:24.462Z',
            updatedAt: '2026-11-05T14:14:24.462Z'
        }]
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    buscar)
rotas.post("/",
        /* 
      #swagger.tags = ['imoveis-tipo']
      #swagger.summary = 'Criar'
      #swagger.description = 'Cria um novo imoveis-tipo'
      #swagger.parameters['body'] = { 
          in: 'body', 
          required: true, 
          description: 'Dados para criação do imoveis-tipo',
          schema: { 
                nome: 'apartamento',
            }
          } 
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
    validarDados, criar)
rotas.put("/:id",
        /* 
      #swagger.tags = ['imoveis-tipo']
      #swagger.summary = 'Editar'
      #swagger.description = 'Edita um imoveis-tipo existente pelo ID'
      #swagger.parameters['id'] = {
          in: 'path', 
          required: true, 
          type: 'string',
          description: 'ID do nível (UUID)'
      }
      #swagger.parameters['body'] = { 
          in: 'body', 
          required: true, 
          description: 'Novos dados do imoveis-tipo',
          schema: { 
                $nome: 'galpão',
          } 
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
    validarDados, editar)
rotas.delete("/:id",
        /* 
      #swagger.tags = ['imoveis-tipo']
      #swagger.summary = 'Deletar'
      #swagger.description = 'Remove um imoveis-tipo pelo ID'
      #swagger.parameters['id'] = {
          in: 'path', 
          required: true, 
          type: 'string',
          description: 'ID do imoveis-tipo que será deletado'
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
