import { PageView } from "./pageView.js"

export class ExibeTudoView {
    exibeTudo(evento, cardsProdutos) {
        if (evento.target.innerText == 'Ver tudo') {
            evento.target.innerText = 'Mostrar menos'
            cardsProdutos.forEach(card => PageView.visivel(card))
        } else {
            evento.target.innerText = 'Ver tudo'
            cardsProdutos.forEach(card => {
                if (cardsProdutos.indexOf(card) + 1 > PageView.mediaQuery())
                    PageView.invisivel(card)
            })
        }
    }
    
    validaBotao(evento) {
        let ehBotaoShow = evento.target.className === 'btn__show texto__primario'
        const cardsProdutos = Array.from(evento.target.parentNode.nextElementSibling.children)
        if (ehBotaoShow) {
            this.exibeTudo(evento, cardsProdutos)
        }
    }

}


export function verTudo(){

}


