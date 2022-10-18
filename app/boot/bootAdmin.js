import { Validacao } from "../controller/validacaoController.js";
import { ProdutosController } from "../controller/produtosController.js";
import { CardView } from "../view/cardView.js";

new CardView().exibeCard()
new Validacao().aplicaValidacao()
const controller = new ProdutosController()

const produtos = document.querySelector('[data-secao]')
produtos.addEventListener('click', async (evento) => {
    await controller.deletaCard(evento)
})