import {serverController} from "../controller/serverController.js"
import { TemplateModel } from "../model/TemplateModel.js";

const secao = document.querySelector("[data-secao]") 

export function constroiCard(src, alt, titulo, preco, id){ 
    const card = document.createElement("div"); 
    card.className = "card__produto"; 
    card.innerHTML = TemplateModel.modeloCard(src,alt,titulo,preco,id)
    card.dataset.id = id
    return card 
}

export async function exibeCard(){ 
    const listaAPI = await new serverController().getProdutos() 
    listaAPI.forEach(elemento => secao.appendChild( 
        constroiCard(elemento.src,elemento.alt,elemento.titulo,elemento.preco,elemento.id)) 
    ); 
} 
// exibeCard()