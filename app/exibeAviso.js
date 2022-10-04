const container = document.querySelector("[data-aviso]") 
const botao = document.querySelector("[data-botao]")

export function exibeAviso(texto){ 
    container.classList.add("aviso"); 
    container.innerHTML = `
    <span class="texto__concluido">${texto}</span>
    <a href="admin.html" class="texto__concluido">Voltar</a>
    `
    
    return container 
}

botao.addEventListener('click', evento => {
    evento.preventDefault()
    exibeAviso("Produto adicionado com sucesso!")  
})