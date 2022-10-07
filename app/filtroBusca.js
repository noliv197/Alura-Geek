import {conectaAPI} from "./conecatAPI.js"
import { constroiCard } from "./exibeCard.js"

const inputBusca = document.querySelector('.input__busca')
const botaoBusca = document.querySelector('.btn__busca')
const inputDropdown = document.querySelector('[data-dropdown]')

botaoBusca.addEventListener('click', evento => {
    evento.preventDefault()
    if(inputDropdown.classList.contains("transparente")){
        inputDropdown.classList.remove('transparente')
    }else{
        inputDropdown.classList.add('transparente')
    }
})

async function filtroBusca(evento){
    evento.preventDefault()
    const input = document.querySelector('.input__busca').value
    const busca = await conectaAPI.buscaProduto(input)

    const lista = document.querySelector("[data-secao]")

    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => {lista.appendChild(
        constroiCard(elemento.src,elemento.alt,elemento.titulo,elemento.preco,elemento.id))
        
    });
    if (busca.length == 0){
        lista.innerHTML += `<h2 class="texto__primario">Nenhum produto encontrado</h2>`
    }
}

inputBusca.addEventListener("blur", evento => filtroBusca(evento))