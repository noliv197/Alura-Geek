import {serverController} from "./serverController.js"
import { CardView } from "../view/cardView.js"

export class BuscaController{

    static getUrl(){
        let page
        const url = window.location.href
        url.split('/')[4] === "produtos-todos.html" ? page = 'cliente' : page = 'admin'
        return page
    }

    static async filtroBusca(evento, input){
        evento.preventDefault()
        
        const inputBusca = document.querySelector(input).value
        const busca = await new serverController().buscaProduto(inputBusca)
        const lista = document.querySelector("[data-secao]")
    
        while(lista.firstChild){
            lista.removeChild(lista.firstChild)
        }
    
        busca.forEach(elemento => {
            const elementoValues = [                
                elemento.src,
                elemento.alt,
                elemento.titulo,
                elemento.preco,
                elemento.categoria,
                elemento.id
            ]
            if(BuscaController.getUrl() === 'cliente'){
                lista.appendChild(new CardView().constroiCardCliente(...elementoValues))
            }else{
                lista.appendChild(new CardView().constroiCard(...elementoValues))
            }
            
            
            
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


