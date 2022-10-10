import {conectaAPI} from "../controller/conecatAPI.js"

function constroiCardSimilar(src, alt, titulo, preco, id){ 
    const card = document.createElement("div"); 
    card.className = "card__produto"; 
    card.innerHTML = ` 
        <img src="${src}" alt="${alt}">
        <span class="texto__titulo">${titulo}</span>
        <span class="texto__negrito">R$${parseFloat(preco).toFixed(2)}</span>
        <a href="produto.html?id=${id}" class="texto__primario">Ver produto</a>
    ` 
    return card 
}

async function secaoFiltro(lista){
    const pegaURL = new URL(window.location)
    const id = pegaURL.searchParams.get('id')
    const dados = await conectaAPI.detalhaProduto(id)
    const secao = document.querySelector("[data-secao]") 
   
    lista.forEach(elemento => {
        if (elemento.categoria == dados.categoria){
        secao.appendChild( 
        constroiCardSimilar(elemento.src,elemento.alt,elemento.titulo,elemento.preco,elemento.id)) 
    }})
}

async function exibeCardSimilar(){ 
    try{
        const listaAPI = await conectaAPI.getAPI() 
        secaoFiltro(listaAPI)
    }
    catch(erro){
     console.log(erro)
    }
} 

exibeCardSimilar()