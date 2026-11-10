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
            id: 'ea203852-07f9-47df-841d-abfa36670d9c',
            descricao: 'teste de historico de imovel',
            data_entrada: '2026-11-06T00:00:00.000Z',
            data_saida: '2026-11-06T00:00:00.000Z',
            valor_aluguel: 0,
            valor_iptu: 0,
            imovel_id: '5fec05f0-adec-4453-ba09-1264b059ea31',
            locatario_id: '6cf0d117-320a-4781-87be-62da4d588e11',
            valor_condominio: 1024,
            createdAt: '2026-11-06T21:49:00.419Z',
            updatedAt: '2026-11-06T21:49:00.419Z'
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
                id: 'ea203852-07f9-47df-841d-abfa36670d9c',
                descricao: 'teste de historico de imovel',
                data_entrada: '2026-11-06T00:00:00.000Z',
                data_saida: '2026-11-06T00:00:00.000Z',
                valor_aluguel: 0,
                valor_iptu: 0,
                imovel_id: '5fec05f0-adec-4453-ba09-1264b059ea31',
                locatario_id: '6cf0d117-320a-4781-87be-62da4d588e11',
                valor_condominio: 1024
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
                descricao: 'teste de historico de imovel',
                data_entrada: '2026-11-06',
                data_saida: '2026-11-06',
                valor_aluguel: 0,
                valor_iptu: 0,
                locatario_id: '6cf0d117-320a-4781-87be-62da4d588e11',
                valor_condominio: 1024
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
