const container = document.querySelector("[data-aviso]") 

export function exibeAviso(texto){ 
    container.classList.add("aviso"); 
    container.innerHTML = `
    <span class="texto__concluido">${texto}</span>
    <a href="admin.html" class="texto__concluido">Voltar</a>
    `
}
