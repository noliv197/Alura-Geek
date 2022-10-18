import { serverController } from "./serverController.js"
import {PageView} from "../view/pageView.js"

class ContatoController{
    
    async enviaContato(){
        const nome = document.querySelector("[data-nome]").value
        const mensagem = document.querySelector("[data-mensagem]").value
        
        await new serverController().postMensagem(nome, mensagem) 
        console.log("mensagem enviada")
    }
}


const formulario = document.querySelector("[data-contato]")
formulario.addEventListener('submit', evento => {
    evento.preventDefault()
    try{
        enviaContato()
        PageView.exibeAviso("Mensagem enviada com sucesso!",'')
    }
    catch(erro){
        PageView.exibeAviso("Não foi possível enviar a mensagem",'')
        console.log(erro)
    }
})

