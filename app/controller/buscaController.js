import {serverController} from "./serverController.js"
import { CardView } from "../view/cardView.js"

export class BuscaController{


    static redireciona(){
        const url = window.location.href
        const domain = url.split('/')
        if(domain[3] === ''|| domain[4] !== "produtos-todos.html"){
            domain.splice(3)
            window.location.href = domain.join('/') + '/telas/produtos-todos.html'
        }
        else return
    }

    static async filtroBusca(evento, input){
        evento.preventDefault()
        
        const inputBusca = document.querySelector(input).value
        const busca = await new serverController().buscaProduto(inputBusca)
        BuscaController.redireciona()
        const lista = document.querySelector("[data-secao]")
    
        while(lista.firstChild){
            lista.removeChild(lista.firstChild)
        }
    
        busca.forEach(elemento => {lista.appendChild(
            new CardView().constroiCardCliente(
                elemento.src,
                elemento.alt,
                elemento.titulo,
                elemento.preco,
                elemento.categoria,
                elemento.id
            ))
            
        });
        if (busca.length == 0){
            lista.innerHTML = `<h2 class="texto__primario">Nenhum resultado encontrado</h2>`
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


