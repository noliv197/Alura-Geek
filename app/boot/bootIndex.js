import { Validacao } from "../controller/validacaoController.js";
import { ProdutosController } from "../controller/produtosController.js";
import {exibeCardCliente} from "../view/exibeCardCliente.js"
//import ver tudo
//import filtro
//enviaContato

(async ()=> {
    new Validacao().aplicaValidacao()
    exibeCardCliente()
    const controller = new ProdutosController()
    controller.verProduto()

})()