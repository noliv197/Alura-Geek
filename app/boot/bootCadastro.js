import { ProdutosController } from "../controller/produtosController.js";
import { Validacao } from "../controller/validacaoController.js";
import { BuscaController } from "../controller/buscaController.js";
import { PageView } from "../view/pageView.js";

new Validacao().aplicaValidacao()

const adiciona = new ProdutosController()
const formulario = document.querySelector("[data-formulario]")
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    try{
         adiciona.adicionaCard()
        PageView.exibeAviso("Produto adicionado com sucesso!","admin.html")
        // window.location.href = "../telas/admin.html"
    }
    catch{
        PageView.exibeAviso("Não foi possível adicionar o video","admin.html")
    }
})

const botaoBusca = document.querySelector('.btn__busca')
botaoBusca.addEventListener('click', evento => {
    evento.preventDefault()
    BuscaController.ativaBotao();
})