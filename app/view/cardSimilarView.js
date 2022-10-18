import {serverController} from "../controller/serverController.js"
import { TemplateModel } from "../model/TemplateModel.js";
import { PageView } from "./pageView.js";

export class CardSimilarView{
    constroiCardSimilar(src,alt,titulo,preco,categoria,id,contador){ 
        const card = document.createElement("div"); 
        card.className = "card__produto"; 
        card.innerHTML = TemplateModel.modeloCardSimilar(src, alt, titulo, preco, id)
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

    async secaoFiltro(lista){
        const pegaURL = new URL(window.location)
        const id = pegaURL.searchParams.get('id')
        const dados = await new serverController().detalhaProduto(id)
        const secao = document.querySelector("[data-secao]") 
       
        lista.forEach(elemento => {
            let contador = 0
            if (elemento.categoria == dados.categoria){
                contador++
                secao.appendChild(this.constroiCardSimilar(
                    elemento.src,
                    elemento.alt,
                    elemento.titulo,
                    elemento.preco,
                    elemento.categoria,
                    elemento.id,
                    contador
                ))  
        }})
    }

    async exibeCardSimilar(){ 
        try{
            const listaAPI = await new serverController().getProdutos() 
            this.secaoFiltro(listaAPI)
        }
        catch(erro){
         console.log(erro)
        }
    }
}