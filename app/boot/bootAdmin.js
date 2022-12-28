import { Validacao } from "../controller/validacaoController.js";
import { ProdutosController } from "../controller/produtosController.js";
import { CardView } from "../view/cardView.js";
import { BuscaController } from "../controller/buscaController.js";
import { ContatoController } from "../controller/contatoController.js";

new CardView().exibeCard()
new Validacao().aplicaValidacao()
new ContatoController().submitFormulario()

const controller = new ProdutosController()

const produtos = document.querySelector('[data-secao]')
produtos.addEventListener('click', async (evento) => {
    await controller.deletaCard(evento)
})


const inputBusca = document.querySelector('.input__busca')
const inputDropdown = document.querySelector('[data-dropdown]')
const botaoBusca = document.querySelector('.btn__busca')

botaoBusca.addEventListener('click', evento => {
    evento.preventDefault()
    BuscaController.ativaBotao();
})

inputBusca.addEventListener("blur", evento => BuscaController.filtroBusca(evento,'.input__busca'))
inputBusca.addEventListener("keypress", evento => {
    if(evento.keyCode === 13){
        BuscaController.filtroBusca(evento,'.input__busca')
    }
})
inputDropdown.addEventListener("blur", evento => BuscaController.filtroBusca(evento,'[data-dropdown]'))

