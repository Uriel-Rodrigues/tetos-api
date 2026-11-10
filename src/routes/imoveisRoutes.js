const { buscar, criar, editar, deletar } = require("../controllers/imoveisController");
const { validarDados } = require("../middlewares/imoveisMiddlewares");
//importando biblioteca multer para upload de arquivos
const multer = require("multer")
const path = require("path")

const rotas = require("express").Router();


//inicializamos a variavel storage que vai funcionar como um meldleware
const storage = multer.diskStorage({
    //destina a pasta para qual os arquivos vao ser armazenados
    destination: function (req, file, cb) {
        cb(null, './uploads/imoveis')
    },
    //criamos o nome do arquivo junto com uma regra 
    filename: function (req, file, cb) {
        const nome = path.basename(file.originalname)
        cb(null, `${Date.now()}-${nome}`)
    }
});
//criamos outra variavel que vai usar o storage como parametro e adicionar uma regra para determinar um limite para o tamanho da imagem de possiveis formatos
const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (_, file, callback) => {
        const tiposAceitos = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
        if (!tiposAceitos.includes(file.mimetype)) {
            callback(new Error("Tipo de arquivo não permitido. Envie apenas imagens."));
            return;
        }
        callback(null, true);
    }
});


rotas.get("/",
        /* 
      #swagger.tags = ['imoveis']
      #swagger.summary = 'Buscar'
      #swagger.description = 'Retorna um array de imoveis cadastrados'
      #swagger.responses[200] = {
          description: 'Lista de imoveis retornada com sucesso',
          schema: [{ 
            id: '5fec05f0-adec-4453-ba09-1264b059ea31',
            matricula: null,
            logradouro: 'rua cidade ecologica',
            bairro: 'edson queiroz',
            cidade: 'fortaleza',
            estado: 'ce',
            numero: '255',
            complemento: null,
            cep: '60160280',
            valor_aluguel: 500,
            iptu: null,
            valor_condominio: null,
            metragem: 43,
            quartos: 3,
            suites: 2,
            banheiros: 2,
            garagens: null,
            tipo_id: '92cf6d93-5df2-4a1c-93ca-e64a61843608',
            locatario_id: null,
            createdAt: '2026-11-06T14:01:25.559Z',
            updatedAt: '2026-11-06T14:01:25.559Z'
        }]
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    buscar)
rotas.post("/",
        /* 
      #swagger.tags = ['imoveis']
      #swagger.summary = 'Criar'
      #swagger.description = 'Cria um novo imoveis'
      #swagger.parameters['body'] = { 
          in: 'body', 
          required: true, 
          description: 'Dados para criação do imoveis',
          schema: [{ 
                matricula: 'opcional'
                bairro: 'nome do bairro'
                cidade: 'nome cidade'
                estado: 'sigla estado'
                numero: 'numero do imovel (string)'
                complemento: 'opcional'
                cep: 'cep do imovel'
                valor_aluguel: 'valor do aluguel (number)'
                iptu: 'valor do iptu (number)'
                valor_condominio: 'valor do iptu (number) opcional'
                metragem: 'valor da metragem (number)'
                quartos: 'numero de quartos (number)'
                suites: 'numero de suites (number)'
                banheiros: 'numero de banheiros (number)'
                garagens: 'numero de garagens (number)'
                tipo_id: 'UUID'
                locatario_id: 'UUID'
                logradouro: 'logradouro'
                imagem: 'imagem do imovel - jpeg, png, webp, jpg'
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
    upload.single('imagem'), validarDados, criar)
rotas.put("/:id",
        /* 
      #swagger.tags = ['imoveis']
      #swagger.summary = 'Editar'
      #swagger.description = 'Edita um imoveis existente pelo ID'
      #swagger.parameters['id'] = {
          in: 'path', 
          required: true, 
          type: 'string',
          description: 'ID do nível (UUID)'
      }
      #swagger.parameters['body'] = { 
          in: 'body', 
          required: true, 
          description: 'Novos dados do imoveis',
          schema: [{ 
                matricula: 'opcional'
                bairro: 'nome do bairro'
                cidade: 'nome cidade'
                estado: 'sigla estado'
                numero: 'numero do imovel (string)'
                complemento: 'opcional'
                cep: 'cep do imovel'
                valor_aluguel: 'valor do aluguel (number)'
                iptu: 'valor do iptu (number)'
                valor_condominio: 'valor do iptu (number) opcional'
                metragem: 'valor da metragem (number)'
                quartos: 'numero de quartos (number)'
                suites: 'numero de suites (number)'
                banheiros: 'numero de banheiros (number)'
                garagens: 'numero de garagens (number)'
                tipo_id: 'UUID'
                locatario_id: 'UUID'
                logradouro: 'logradouro'
                imagem: 'imagem do imovel - jpeg, png, webp, jpg (opcional)'
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
      #swagger.tags = ['imoveis']
      #swagger.summary = 'Deletar'
      #swagger.description = 'Remove um imoveis pelo ID'
      #swagger.parameters['id'] = {
          in: 'path', 
          required: true, 
          type: 'string',
          description: 'ID do imoveis que será deletado'
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
