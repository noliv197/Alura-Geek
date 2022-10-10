const header = document.querySelectorAll('.secao__header')

header.forEach(elemento => elemento.addEventListener('click', async (evento) => {
    evento.preventDefault()
    
    let ehBotaoShow = evento.target.className === 'btn__show texto__primario'
    const cardsProdutos = Array.from(evento.target.parentNode.nextElementSibling.children)
    if (ehBotaoShow){
        if(evento.target.innerText == 'Ver tudo'){
            evento.target.innerText = 'Mostrar menos'
            console.log(cardsProdutos)
            cardsProdutos.forEach(card => card.classList.add("visivel"))
            
        }else{
            evento.target.innerText = 'Ver tudo'
            cardsProdutos.forEach(card => {
                if(cardsProdutos.indexOf(card) > 3) {
                    card.classList.remove("visivel")
                    card.classList.add("transparente")

                }
            })
        }
    }
})
)

