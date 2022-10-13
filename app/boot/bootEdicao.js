import { Validacao } from "../controller/validacaoController.js";
import { ProdutosController } from "../controller/produtosController.js";

(async ()=>{
    new Validacao().aplicaValidacao()
    const controller = new ProdutosController()
    controller.editaProduto()

})()
