import {serverController} from "../controller/serverController.js"
import { TemplateModel } from "../model/TemplateModel.js";

function constroiCardSimilar(src, alt, titulo, preco, id){ 
    const card = document.createElement("div"); 
    card.className = "card__produto"; 
    card.innerHTML = TemplateModel.modeloCardSimilar(src, alt, titulo, preco, id)
    return card 
}

async function secaoFiltro(lista){
    const pegaURL = new URL(window.location)
    const id = pegaURL.searchParams.get('id')
    const dados = await new serverController().detalhaProduto(id)
    const secao = document.querySelector("[data-secao]") 
   
    lista.forEach(elemento => {
        if (elemento.categoria == dados.categoria){
        secao.appendChild( 
        constroiCardSimilar(elemento.src,elemento.alt,elemento.titulo,elemento.preco,elemento.id)) 
    }})
}

export async function exibeCardSimilar(){ 
    try{
        const listaAPI = await new serverController().getProdutos() 
        secaoFiltro(listaAPI)
    }
    catch(erro){
     console.log(erro)
    }
} 

exibeCardSimilar()