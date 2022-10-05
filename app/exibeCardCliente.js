import {conectaAPI} from "./conecatAPI.js"
const secao = document.querySelectorAll("[data-secao]") 

function constroiCardCliente(src, alt, titulo, preco, id){ 
    const card = document.createElement("div"); 
    card.className = "card__produto"; 
    card.innerHTML = ` 
        <img src="${src}" alt="${alt}">
        <span class="texto__titulo">${titulo}</span>
        <span class="texto__negrito">R$${preco}</span>
        <a href="produto.html?id=${id}" class="texto__primario">Ver produto</a>
    ` 
    return card 
}

function secaoFiltro(lista, secao){
    lista.forEach(elemento => {
        if (elemento.categoria == secao.id){
            secao.appendChild( 
            constroiCardCliente(elemento.src,elemento.alt,elemento.titulo,elemento.preco,elemento.id)) 
        }})
}

async function exibeCardCliente(){ 
    try{
    const listaAPI = await conectaAPI.getAPI() 
    secao.forEach(div => secaoFiltro(listaAPI,div))
    }catch(erro){
     console.log(erro)
    }
} 
exibeCardCliente()