const { buscar, criar, editar, deletar } = require("../controllers/historicoImovelController");
const { validarDados } = require("../middlewares/historicoImovelMiddlewares");

const rotas = require("express").Router();

rotas.get("/",
        /* 
      #swagger.tags = ['historico-imoveis']
      #swagger.summary = 'Buscar'
      #swagger.description = 'Retorna um array de historico-imoveis cadastrados'
      #swagger.responses[200] = {
          description: 'Lista de historico-imoveis retornada com sucesso',
          schema: [{ 
            id: 'c801b5bb-e915-46cf-87c0-4feede784f73',
            descricao: 'manutencao feita teste editar',
            valor: 10,
            data: '2026-11-06T00:00:00.000Z',
            createdAt: '2026-11-06T20:32:27.141Z',
            updatedAt: '2026-11-06T20:32:27.141Z',
            imovel_id: '5fec05f0-adec-4453-ba09-1264b059ea31'
        }]
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    buscar)
rotas.post("/",
        /* 
      #swagger.tags = ['historico-imoveis']
      #swagger.summary = 'Criar'
      #swagger.description = 'Cria um novo historico-imoveis'
      #swagger.parameters['body'] = { 
          in: 'body', 
          required: true, 
          description: 'Dados para criação do historico-imoveis',
          schema: [{
            descricao: 'outra manutencao manutencao feita',
            valor: 1022,
            data: '2026-11-06',
            imovel_id: '5fec05f0-adec-4453-ba09-1264b059ea31'
            }]
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
      #swagger.tags = ['historico-imoveis']
      #swagger.summary = 'Editar'
      #swagger.description = 'Edita um historico-imoveis existente pelo ID'
      #swagger.parameters['id'] = {
          in: 'path', 
          required: true, 
          type: 'string',
          description: 'ID do nível (UUID)'
      }
      #swagger.parameters['body'] = { 
          in: 'body', 
          required: true, 
          description: 'Novos dados do historico-imoveis',
          schema: [{ 
            descricao: 'outra manutencao manutencao feita',
            valor: 1022,
            data: '2026-11-06',
            imovel_id: '5fec05f0-adec-4453-ba09-1264b059ea31',
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
    validarDados, editar)
rotas.delete("/:id",
        /* 
      #swagger.tags = ['historico-imoveis']
      #swagger.summary = 'Deletar'
      #swagger.description = 'Remove um historico-imoveis pelo ID'
      #swagger.parameters['id'] = {
          in: 'path', 
          required: true, 
          type: 'string',
          description: 'ID do historico-imoveis que será deletado'
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
