import { Validacao } from "../controller/validacaoController.js";
import { BuscaController } from "../controller/buscaController.js";
import { ContatoController } from "../controller/contatoController.js";

new Validacao().aplicaValidacao()
new ContatoController().submitFormulario()

const botaoBusca = document.querySelector('.btn__busca')
botaoBusca.addEventListener('click', evento => {
    evento.preventDefault()
    BuscaController.ativaBotao();
})

const formulario = document.querySelector('[data-login]')
formulario.addEventListener("submit", evento =>{
    evento.preventDefault()
    if (formulario.checkValidity()){
        window.location.href = "admin.html"
    }
})