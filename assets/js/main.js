const secaoProdutos = document.querySelectorAll('.card__produto')
let listaProdutos = []
let produto = {
    src:'',
    alt:'',
    titulo: '',
    preco: '',
    categoria:'',
    id: '',
    descricao: ''
}

secaoProdutos.forEach(card=>{
    let text = card.children[0].children[2].src
    produto = {
        src: card.children[0].children[2].src,
        alt: `Foto ${card.children[1].innerHTML}`,
        titulo: card.children[1].innerHTML,
        preco: card.children[2].innerHTML,
        categoria: text.split("/")[6].split("-")[0],
        id: card.children[3].innerHTML,
        descricao:''
    }
    listaProdutos.push(produto)
})

console.log(JSON.stringify(listaProdutos))