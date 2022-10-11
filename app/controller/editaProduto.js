import { serverController } from "./serverController.js";

(async  ()=>{
    const formulario = document.querySelector("[data-formulario]")
    const pegaURL = new URL(window.location)
    const id = pegaURL.searchParams.get('id')

    const inputUrl = document.querySelector("[data-url]")
    const inputTitulo = document.querySelector("[data-titulo]")
    const inputPreco = document.querySelector("[data-preco]")
    const inputCategoria = document.querySelector("[data-categoria]")
    const inputDescricao = document.querySelector("[data-descricao]")

    try{
        const dados = await new serverController().detalhaProduto(id)
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
        await new serverController().atualizaProduto(inputUrl.value, inputTitulo.value, inputPreco.value, inputCategoria.value, inputDescricao.value,id)
        window.location.href = "../telas/admin.html"
    }
    catch(erro){
        console.log(erro)
    }
    })
})()
