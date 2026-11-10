const { buscar, criar, editar, deletar } = require("../controllers/locatariosController");
const { validarDados } = require("../middlewares/locatariosMiddlewares");

const rotas = require("express").Router();

rotas.get("/",
        /* 
      #swagger.tags = ['locatarios']
      #swagger.summary = 'Buscar'
      #swagger.description = 'Retorna um array de locatarios cadastrados'
      #swagger.responses[200] = {
          description: 'Lista de locatarios retornada com sucesso',
          schema: [{ 
            id: '6cf0d117-320a-4781-87be-62da4d588e11',
            nome: 'uriel bezerra rodrigues',
            telefone: '85987187800',
            cpf_cnpj: '12345678898',
            createdAt: '2026-11-04T02:23:21.220Z',
            updatedAt: '2026-11-04T02:23:21.220Z'
    
        }]
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    buscar)
rotas.post("/",
        /* 
      #swagger.tags = ['locatarios']
      #swagger.summary = 'Criar'
      #swagger.description = 'Cria um novo locatarios'
      #swagger.parameters['body'] = { 
          in: 'body', 
          required: true, 
          description: 'Dados para criação do locatarios',
          schema: [{ 
                nome: 'nome',
                telefone: 'telefone',
                cpf_cnpj: 'cpf_cnpj',
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
      #swagger.tags = ['locatarios']
      #swagger.summary = 'Editar'
      #swagger.description = 'Edita um locatarios existente pelo ID'
      #swagger.parameters['id'] = {
          in: 'path', 
          required: true, 
          type: 'string',
          description: 'ID do nível (UUID)'
      }
      #swagger.parameters['body'] = { 
          in: 'body', 
          required: true, 
          description: 'Novos dados do locatarios',
          schema: [{ 
                nome: 'nome',
                telefone: 'telefone',
                cpf_cnpj: 'cpf_cnpj',
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
      #swagger.tags = ['locatarios']
      #swagger.summary = 'Deletar'
      #swagger.description = 'Remove um locatarios pelo ID'
      #swagger.parameters['id'] = {
          in: 'path', 
          required: true, 
          type: 'string',
          description: 'ID do locatarios que será deletado'
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
