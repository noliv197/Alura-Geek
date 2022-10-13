import {serverController} from "../controller/serverController.js"
import { TemplateModel } from "../model/TemplateModel.js";

const secao = document.querySelectorAll("[data-secao]") 

function constroiCardCliente(src, alt, titulo, preco,categoria,id){ 
    const card = document.createElement("div"); 
    card.className = "card__produto"; 
    card.innerHTML = TemplateModel.modeloCardCliente(src, alt, titulo, preco,id)
    card.dataset.id = id
    card.dataset.categoria = categoria
    return card 
}

function secaoFiltro(lista, secao){
    lista.forEach(elemento => {
        if (elemento.categoria == secao.id){
            secao.appendChild( 
            constroiCardCliente(elemento.src,elemento.alt,elemento.titulo,elemento.preco,elemento.categoria,elemento.id)) 
        }})
}

export async function exibeCardCliente(){ 
    try{
        const listaAPI = await new serverController().getProdutos() 
        secao.forEach(div => secaoFiltro(listaAPI,div))
    }
    catch(erro){
        console.log(erro)
    }
} 
// exibeCardCliente()