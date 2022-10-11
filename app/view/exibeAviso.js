import { TemplateModel } from "../model/TemplateModel.js";

const container = document.querySelector("[data-aviso]") 

export function exibeAviso(texto){ 
    container.classList.add("aviso"); 
    container.innerHTML = TemplateModel.modeloAviso(texto)
}
