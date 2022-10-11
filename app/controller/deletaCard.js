import { serverController } from "./serverController.js"

const produtos = document.querySelector('[data-secao]')

produtos.addEventListener('click', async (evento) => {
    let ehBotaoDeDeleta = evento.target.className === 'btn__icone btn__exclui'
    if (ehBotaoDeDeleta) {
        // evento.preventDefault()
        try{
            const cardProduto = evento.target.closest('[data-id]')
            let id = cardProduto.dataset.id
            await new serverController().removeProduto(id)
            cardProduto.remove()
        }
        catch(erro){
            console.log(erro)
        }
    }
    document.location.reload(false)
})