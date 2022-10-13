import { ProdutosController } from "../controller/produtosController.js";
import { Validacao } from "../controller/validacaoController.js";
import { exibeAviso } from "../view/exibeAviso.js"

new Validacao().aplicaValidacao()

const formulario = document.querySelector("[data-formulario]")
const adiciona = new ProdutosController()
formulario.addEventListener('submit', evento => {
    try{
        adiciona.adicionaCard(evento)
        exibeAviso("Produto adicionado com sucesso!")
        window.location.href = "../telas/admin.html"
    }
    catch{
        exibeAviso("Não foi possível adicionar o video")
    }
})