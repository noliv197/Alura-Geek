import { conectaAPI } from "./conecatAPI.js"

const formulario = document.querySelector("[data-contato]")

async function enviaContato(){
    const nome = document.querySelector("[data-nome]").value
    const mensagem = document.querySelector("[data-mensagem]").value
   
    await conectaAPI.postMensagem(nome, mensagem) 
}

formulario.addEventListener('submit', evento => {
    evento.preventDefault()
    try{
        enviaContato()
        console.log("Mensagem enviada com sucesso!")
    }
    catch{
        console.log("Não foi possível enviar a mensagem")
    }
})

