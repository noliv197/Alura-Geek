import { Validacao } from "../controller/validacaoController.js";
import { ProdutosController } from "../controller/produtosController.js";
import { CardSimilarView } from "../view/cardSimilarView.js";
import { ContatoController } from "../controller/contatoController.js";

(async ()=> {
    new Validacao().aplicaValidacao()
    new CardSimilarView().exibeCardSimilar()
    new ContatoController().submitFormulario()
    const controller = new ProdutosController()
    controller.descricaoProduto()
})()

