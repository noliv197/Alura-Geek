import { Validacao } from "../controller/validacaoController.js";
import { ProdutosController } from "../controller/produtosController.js";
import { CardSimilarView } from "../view/cardSimilarView.js";

(async ()=> {
    new Validacao().aplicaValidacao()
    new CardSimilarView().exibeCardSimilar()
    const controller = new ProdutosController()
    controller.descricaoProduto()
})()

