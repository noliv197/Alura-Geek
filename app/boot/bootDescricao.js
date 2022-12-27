import { Validacao } from "../controller/validacaoController.js";
import { ProdutosController } from "../controller/produtosController.js";
import { CardSimilarView } from "../view/cardSimilarView.js";
import { BuscaController } from "../controller/buscaController.js";
import { ContatoController } from "../controller/contatoController.js";

(async ()=> {
    new Validacao().aplicaValidacao()
    new CardSimilarView().exibeCardSimilar()
    new ContatoController().submitFormulario()
    const controller = new ProdutosController()
    controller.descricaoProduto()

    const botaoBusca = document.querySelector('.btn__busca')   
    botaoBusca.addEventListener('click', evento => {
        evento.preventDefault()
        BuscaController.ativaBotao();
    })
    //const inputBusca = document.querySelector('.input__busca')
    //const inputDropdown = document.querySelector('[data-dropdown]')
    // inputBusca.addEventListener("blur", evento => BuscaDescricao.filtroBusca(evento,'.input__busca'))
    // inputDropdown.addEventListener("blur", evento => BuscaDescricao.filtroBusca(evento,'[data-dropdown]'))

})()

