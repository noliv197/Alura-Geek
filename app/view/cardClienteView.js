import { TemplateModel } from "../model/TemplateModel.js";
import { serverController } from "../controller/serverController.js";
import { PageView } from "./pageView.js";

export class CardClienteView{
     
    constroiCardCliente(src, alt, titulo, preco,categoria,id, contador){ 
        const card = document.createElement("div"); 
        card.className = "card__produto"; 
        card.innerHTML = TemplateModel.modeloCardCliente(src, alt, titulo, preco,id)
        card.dataset.id = id
        card.dataset.categoria = categoria
        if (contador > PageView.mediaQuery()){
            card.classList.add('transparente')
        }
        else{
            card.classList.add('visivel')
        }
        return card 
    }
    
    secaoFiltro(lista, secao){
        let contador = 0
        lista.forEach(elemento => {
            if (elemento.categoria == secao.id){
                contador++
                secao.appendChild(this.constroiCardCliente(
                    elemento.src,
                    elemento.alt,
                    elemento.titulo,
                    elemento.preco,
                    elemento.categoria,
                    elemento.id,
                    contador
                )) 
            }
        })
    }
    
    async exibeCardCliente(){ 
        try{
            const secao = document.querySelectorAll("[data-secao]")
            const listaAPI = await new serverController().getProdutos() 
            secao.forEach(div => this.secaoFiltro(listaAPI,div))
        }
        catch(erro){
            console.log(erro)
        }
    } 
}