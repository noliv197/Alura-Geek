import { Validacao } from "../controller/validacaoController.js";
import { ContatoController } from "../controller/contatoController.js";

new Validacao().aplicaValidacao()
new ContatoController().submitFormulario()

const formulario = document.querySelector('[data-login]')
formulario.addEventListener("submit", evento =>{
    evento.preventDefault()
    if (formulario.checkValidity()){
        window.location.href = "admin.html"
    }
})
