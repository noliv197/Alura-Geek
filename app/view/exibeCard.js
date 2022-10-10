import {conectaAPI} from "../controller/conecatAPI.js"
const secao = document.querySelector("[data-secao]") 

export function constroiCard(src, alt, titulo, preco, id){ 
    const card = document.createElement("div"); 
    card.className = "card__produto"; 
    card.innerHTML = ` 
        <div class="container__edita">
            <button class="btn__icone btn__exclui"></button>
            <a href="../telas/produto-edicao.html?id=${id}" class="btn__icone btn__edita"></a>
            <img src="${src}" alt="${alt}">
        </div>
        <span class="texto__titulo">${titulo}</span>
        <span class="texto__negrito">R$${parseFloat(preco).toFixed(2)}</span>
        <span class="texto__id"># ${id}</span>
    ` 
    card.dataset.id = id
    return card 
}

async function exibeCard(){ 
    const listaAPI = await conectaAPI.getAPI() 
    listaAPI.forEach(elemento => secao.appendChild( 
        constroiCard(elemento.src,elemento.alt,elemento.titulo,elemento.preco,elemento.id)) 
    ); 
} 
exibeCard()