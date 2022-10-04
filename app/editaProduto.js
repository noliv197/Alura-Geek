import { conectaAPI } from "./conecatAPI.js";

(async  ()=>{
    const formulario = document.querySelector("[data-formulario]")
    const pegaURL = new URL(window.location)
    const id = pegaURL.searchParams.get('id')

    const inputUrl = document.querySelector("[data-url]")
    const inputTitulo = document.querySelector("[data-nome]")
    const inputPreco = document.querySelector("[data-preco]")
    const inputCategoria = document.querySelector("[data-categoria]")
    const inputDescricao = document.querySelector("[data-descricao]")

    try{
        const dados = await conectaAPI.detalhaProduto(id)
        inputUrl.value = dados.src
        inputTitulo.value = dados.titulo
        inputPreco.value = dados.preco
        inputCategoria.value = dados.categoria
        inputDescricao.value = dados.descricao

    }        
    catch(erro){
        console.log(erro)
    }

    formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault()

    try{
        await conectaAPI.atualizaProduto(inputUrl.value, inputTitulo.value, inputPreco.value, inputCategoria.value, inputDescricao.value,id)
        window.location.href = "../telas/admin.html"
    }
    catch(erro){
        console.log(erro)
    }
    })
})()
