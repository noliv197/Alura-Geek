import { Validacao } from "../controller/validacaoController.js";
import { ProdutosController } from "../controller/produtosController.js";
import { BuscaController } from "../controller/buscaController.js";
import { ContatoController } from "../controller/contatoController.js";

(async ()=>{
    new Validacao().aplicaValidacao()
    new ContatoController().submitFormulario()
    const controller = new ProdutosController()
    controller.editaProduto()

    const botaoBusca = document.querySelector('.btn__busca')
    botaoBusca.addEventListener('click', evento => {
        evento.preventDefault()
        BuscaController.ativaBotao();
    })

})()
