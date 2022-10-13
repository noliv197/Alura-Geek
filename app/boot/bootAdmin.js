import { Validacao } from "../controller/validacaoController.js";
import { ProdutosController } from "../controller/produtosController.js";
import { exibeCard } from "../view/exibeCard.js";

exibeCard()
new Validacao().aplicaValidacao()
const controller = new ProdutosController()

const produtos = document.querySelector('[data-secao]')
produtos.addEventListener('click', async (evento) => {
    await controller.deletaCard(evento)
})