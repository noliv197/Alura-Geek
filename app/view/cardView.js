import { TemplateModel } from "../model/TemplateModel.js";
import { serverController } from "../controller/serverController.js";

export class CardView{

    secao = document.querySelector('#todos')
    
    constroiCard(src, alt, titulo, preco,categoria, id){
        const card = document.createElement("div"); 
        card.className = "card__produto"; 
        card.innerHTML = TemplateModel.modeloCard(src,alt,titulo,preco,id)
        card.dataset.id = id
        card.dataset.categoria = categoria
        return card 
    }

    async exibeCard(){ 
        try{
            const listaAPI = await new serverController().getProdutos() 
            listaAPI.forEach(elemento => this.secao.appendChild( 
                this.constroiCard(
                    elemento.src,
                    elemento.alt,
                    elemento.titulo,
                    elemento.preco,
                    elemento.id
                )) 
            ); 
        }
        catch(erro){
            console.log(erro)
        }
    }
}





