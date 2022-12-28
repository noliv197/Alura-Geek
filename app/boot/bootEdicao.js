import { Validacao } from "../controller/validacaoController.js";
import { ProdutosController } from "../controller/produtosController.js";
import { ContatoController } from "../controller/contatoController.js";

(async ()=>{
    new Validacao().aplicaValidacao()
    new ContatoController().submitFormulario()
    const controller = new ProdutosController()
    controller.editaProduto()

})()
