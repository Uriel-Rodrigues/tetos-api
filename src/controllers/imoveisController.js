// async function buscar(req, res){
//     try {
//         const query = {};
//         const includeObj = {};

//         if (req.query.manutencoes === "true") {
//             includeObj.historico_manutecao = true;
//         }

//         if (req.query.historicos === "true") {
//             includeObj.historico_imovel = true;
//         }
        
//         if (req.query.locatario === "true") {
//             includeObj.locatarios = true;
//         }

//         // Se houver pelo menos um relacionamento solicitado, adiciona o include na query
//         if (Object.keys(includeObj).length > 0) {
//             query.include = includeObj;
//         }

//         const linhas = await PRISMA.imoveis.findMany(query);
//         return res.json(linhas);
//     } catch (error) {
//         return res.status(500).json({
//             type: "error",
//             description: error.message 
//         });
//     }
// }

const PRISMA = require("../services");

// buscar registros na tabela imoveis 
async function buscar(req, res) {
    try {

        //query permite pegar um parametro opcional dentro da URL no caso abaixo entamos verificando se o parametro "manutencoes"
        //existe no caso de existir fazemos a requisição trasendo o historico de de manutenções do imovel. 
        const query = {};
        if (req.query.manutencoes == "true"){
            query.include = {
                historico_manutencoes: true
            }
        } 
        if (req.query.historicos == "true"){
            query.include = {
                historico_imovel: true
            }
        } 
        if (req.query.locatario == "true"){
            query.include = {
                locatarios: true
            }
        } 
        
        const linhas = await PRISMA.imoveis.findMany();
        res.json(linhas)

    } catch (error) {
        res.json({
            type: "error",
            description: error.message
        })

    }
}

// criar registros na tabela imoveis 
async function criar(req, res) {
    try {
        const dados = req.body;
        const arquivo = req.file

        const sql = await PRISMA.imoveis.create({
            data: {
                ...dados,
                quartos: Number(dados.quartos),
                banheiros: Number(dados.banheiros),
                suites: Number(dados.suites),
                garagens: Number(dados.garagens),
                metragem: Number(dados.metragem),
                valor_aluguel: Number(dados.valor_aluguel),
                imagem: `/uploads/imoveis/${arquivo.filename}`


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

// editar registros na tabela imoveis 
async function editar(req, res) {
    try {
        const dados = req.body;
        const { id } = req.params
        const sql = await PRISMA.imoveis.update({
            where: { id },
            data: dados
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

// deletar registros na tabela imoveis 
async function deletar(req, res) {
    try {
        const { id } = req.params
        const sql = await PRISMA.imoveis.delete({
            where: { id },
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