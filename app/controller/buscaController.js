import {serverController} from "./serverController.js"
import { CardView } from "../view/cardView.js"
import { CardSimilarView } from "../view/cardSimilarView.js"

export class BuscaController{
    static async filtroBusca(evento, input){
        evento.preventDefault()
        const inputBusca = document.querySelector(input).value
        const busca = await new serverController().buscaProduto(inputBusca)
    
        const lista = document.querySelector("[data-secao]")
    
        while(lista.firstChild){
            lista.removeChild(lista.firstChild)
        }
    
        busca.forEach(elemento => {lista.appendChild(
            new CardView().constroiCard(
                elemento.src,
                elemento.alt,
                elemento.titulo,
                elemento.preco,
                elemento.categoria,
                elemento.id
            ))
            
        });
        if (busca.length == 0){
            lista.innerHTML = `<h2 class="texto__primario">0 resultados</h2>`
        }
    }

    static ativaBotao() {
        const inputDropdown = document.querySelector('[data-dropdown]')
        if (inputDropdown.classList.contains("transparente")) {
            inputDropdown.classList.remove('transparente');
        } else {
            inputDropdown.classList.add('transparente');
        }
    }
}


