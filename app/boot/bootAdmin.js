import { Validacao } from "../controller/validacaoController.js";
import { ProdutosController } from "../controller/produtosController.js";
import { CardView } from "../view/cardView.js";
import { BuscaController } from "../controller/buscaController.js";

new CardView().exibeCard()
new Validacao().aplicaValidacao()
const controller = new ProdutosController()

const produtos = document.querySelector('[data-secao]')
produtos.addEventListener('click', async (evento) => {
    await controller.deletaCard(evento)
})


const inputBusca = document.querySelector('.input__busca')
const botaoBusca = document.querySelector('.btn__busca')
const inputDropdown = document.querySelector('[data-dropdown]')

botaoBusca.addEventListener('click', evento => {
    evento.preventDefault()
    BuscaController.ativaBotao();
})
inputBusca.addEventListener("blur", evento => BuscaController.filtroBusca(evento,'.input__busca'))
inputDropdown.addEventListener("blur", evento => BuscaController.filtroBusca(evento,'[data-dropdown]'))

