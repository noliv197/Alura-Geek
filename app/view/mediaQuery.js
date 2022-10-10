const tela = screen.width
console.log(tela)

function addClasse(lista, valorMaximo){
    lista?.forEach(card => {
        if(lista.indexOf(card) > valorMaximo) {
            card.classList.add("transparente")
        }
        else{
            card.classList.remove("transparente")
        }
    })
}
function mediaQuery(lista){
    if (tela > 1210){
        const valorMaximo = 5
        console.log(valorMaximo)
        addClasse(lista,valorMaximo)
    }
    else if (tela <= 1210 && tela > 1035){
        const valorMaximo = 4
        console.log(valorMaximo)
        addClasse(lista,valorMaximo)
    }
    else if (tela <= 1035){
        const valorMaximo = 3
        console.log(valorMaximo)
        addClasse(lista,valorMaximo)
    }

}


const secao = document.querySelectorAll('.card__produtos')
console.log(secao)
// secao.forEach(elemento => {
//     const cardsProdutos = Array.from(elemento.children)
//     console.log([...elemento.childNodes])
//     mediaQuery(cardsProdutos)
// })



