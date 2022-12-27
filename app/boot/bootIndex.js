import { Validacao } from "../controller/validacaoController.js";
import { CardClienteView } from "../view/cardClienteView.js";
import { ExibeTudoView } from "../view/exibeTudoView.js";
import { BuscaController } from "../controller/buscaController.js";
import { ContatoController } from "../controller/contatoController.js";

new Validacao().aplicaValidacao()
new CardClienteView().exibeCardCliente()
new ContatoController().submitFormulario()

const header = document.querySelectorAll('.secao__header')
header.forEach(elemento => elemento.addEventListener('click', async (evento) => {
    evento.preventDefault()
    new ExibeTudoView().validaBotao(evento)
}))

// Filtro Busca
const botaoBusca = document.querySelector('.btn__busca')
const inputBusca = document.querySelector('.input__busca')
const inputDropdown = document.querySelector('[data-dropdown]')

botaoBusca.addEventListener('click', evento => {
    evento.preventDefault()
    BuscaController.ativaBotao();
})

inputBusca.addEventListener("blur", evento => BuscaController.filtroBusca(evento,'.input__busca'))
inputDropdown.addEventListener("blur", evento => BuscaController.filtroBusca(evento,'[data-dropdown]'))