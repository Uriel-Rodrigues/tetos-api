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


rotas.get("/", buscar)
rotas.post("/", upload.single('imagem'), validarDados, criar)
rotas.put("/:id",validarDados, editar)
rotas.delete("/:id", deletar)

module.exports = rotas
