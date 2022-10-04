import { conectaAPI } from "./conecatAPI.js"
import { exibeAviso } from "./exibeAviso.js"

const formulario = document.querySelector("[data-formulario]")

async function adicionaCard(evento){
    evento.preventDefault()
    const url = document.querySelector("[data-url]").value
    const titulo = document.querySelector("[data-nome]").value
    const preco = document.querySelector("[data-preco]").value
    const categoria = document.querySelector("[data-categoria]").value
    const descricao = document.querySelector("[data-descricao]").value

    await conectaAPI.postAPI(url, titulo, preco, categoria, descricao)
    
    
}

formulario.addEventListener('submit', evento => {
    adicionaCard(evento)
    exibeAviso("Produto adicionado com sucesso!")
    
})