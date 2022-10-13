import { Validacao } from "../controller/validacaoController.js";
import { ProdutosController } from "../controller/produtosController.js";
import { exibeCardSimilar } from "../view/exibeCardSimilar.js";

(async ()=> {
    new Validacao().aplicaValidacao()
    exibeCardSimilar()
    const controller = new ProdutosController()
    controller.verProduto()
})()

