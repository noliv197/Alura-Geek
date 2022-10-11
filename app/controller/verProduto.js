import { serverController} from "./serverController.js";

(async  ()=>{
    const pegaURL = new URL(window.location)
    const id = pegaURL.searchParams.get('id')

    const url = document.querySelector("[data-url]")
    const titulo = document.querySelector("[data-titulo]")
    const preco = document.querySelector("[data-preco]")
    const descricao = document.querySelector("[data-descricao]")

    try{
        const dados = await new serverController().detalhaProduto(id)
        url.src = dados.src
        titulo.innerText = dados.titulo
        preco.innerText = `R$${dados.preco}`
        if(dados.descricao == ""){
            descricao.innerText = "Nenhuma descrição do produto foi fornecida"
        }else{
            descricao.innerText = dados.descricao
        }

    }catch(erro){
        console.log(erro)
    }        


})()