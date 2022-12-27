import { Validacao } from "../controller/validacaoController.js";
import { BuscaController } from "../controller/buscaController.js";
import { ContatoController } from "../controller/contatoController.js";
import { CardView } from "../view/cardView.js";

new CardView().exibeCardClienteTodos()
new Validacao().aplicaValidacao()
new ContatoController().submitFormulario()

const inputBusca = document.querySelector('.input__busca')
const botaoBusca = document.querySelector('.btn__busca')
const inputDropdown = document.querySelector('[data-dropdown]')

botaoBusca.addEventListener('click', evento => {
    evento.preventDefault()
    BuscaController.ativaBotao();
})

inputBusca.addEventListener("blur", evento => BuscaController.filtroBusca(evento,'.input__busca'))
inputDropdown.addEventListener("blur", evento => BuscaController.filtroBusca(evento,'[data-dropdown]'))

