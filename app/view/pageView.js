import { TemplateModel } from "../model/TemplateModel.js";

export class PageView{
    static visivel(elemento){
        elemento.classList.add("visivel")
        elemento.classList.remove("transparente")
    }
    
    static invisivel(elemento){
        elemento.classList.remove("visivel")
        elemento.classList.add("transparente")
    }
    
    static mediaQuery(){
        const tela = screen.width
        if (tela > 1210){
            return 6
        }
        else if (tela <= 1210 && tela > 1035){
            return 5
        }
        else if (tela <= 1035){
            return 4
        }
    }

    static exibeAviso(texto, link){ 
        const container = document.querySelector("[data-aviso]") 
        container.classList.add("aviso"); 
        container.innerHTML = TemplateModel.modeloAviso(texto,link)
    }


}




