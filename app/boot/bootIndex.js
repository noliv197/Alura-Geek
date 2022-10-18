import { Validacao } from "../controller/validacaoController.js";
import { CardClienteView } from "../view/cardClienteView.js";
import { ExibeTudoView } from "../view/exibeTudoView.js";
//import filtro
//enviaContato


new Validacao().aplicaValidacao()
new CardClienteView().exibeCardCliente()

const header = document.querySelectorAll('.secao__header')
header.forEach(elemento => elemento.addEventListener('click', async (evento) => {
    evento.preventDefault()
    new ExibeTudoView().validaBotao(evento)
}))