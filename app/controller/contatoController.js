import { serverController } from "./serverController.js"
import {PageView} from "../view/pageView.js"

export class ContatoController{
    formulario = document.querySelector("[data-contato]")

    async enviaContato(){
        try{
            const nome = document.querySelector("[data-nome]")
            const mensagem = document.querySelector("[data-mensagem]")
            
            await new serverController().postMensagem(nome.value, mensagem.value) 
            nome.value = ''
            mensagem.value = ''
            console.log("mensagem enviada")
        }
        catch(erro){
            console.log(erro)
        }
    }

    submitFormulario(){
        this.formulario.addEventListener('submit', evento => {
            evento.preventDefault()
            try{
                this.enviaContato()
                PageView.exibeAviso(
                    "avisoMensagem",
                    "Mensagem enviada com sucesso!",
                    '',
                    true
                )
            }
            catch(erro){
                PageView.exibeAviso(
                    "avisoMensagem",
                    "Não foi possível enviar a mensagem",
                    '',
                    true
                )
                console.log(erro)
            }
        })
    }
}


