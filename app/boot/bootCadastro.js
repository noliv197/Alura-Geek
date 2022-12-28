import { ProdutosController } from "../controller/produtosController.js";
import { Validacao } from "../controller/validacaoController.js";
import { PageView } from "../view/pageView.js";
import { ContatoController } from "../controller/contatoController.js";

new Validacao().aplicaValidacao()
new ContatoController().submitFormulario()

const adiciona = new ProdutosController()
const formulario = document.querySelector("[data-formulario]")
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    try{
         adiciona.adicionaCard()
        PageView.exibeAviso(
            "aviso",
            "Produto adicionado com sucesso!",
            "admin.html",
            false
        )
    }
    catch{
        PageView.exibeAviso(
            "aviso",
            "Não foi possível adicionar o video",
            "admin.html",
            false
        )
    }
})
