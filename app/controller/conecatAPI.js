async function getAPI(){
    const conexao = await fetch('http://localhost:3000/produtos')
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}

async function postAPI(src, titulo, preco, categoria, descricao){
    const conexao = await fetch('http://localhost:3000/produtos',{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            src: src,
            alt: `Foto ${titulo}`,
            titulo: titulo,
            preco: preco,
            categoria: categoria,
            descricao: descricao,
        })
    })
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}
async function postMensagem(nome,mensagem){
    const conexao = await fetch('http://localhost:3000/mensagens',{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            mensagem: mensagem
        })
    })
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}


async function removeProduto(id){
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    })

    return conexao
}

async function detalhaProduto(id){
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`) 
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}

async function atualizaProduto (src,titulo, preco, categoria, descricao,id){
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`,{
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            src: src,
            alt: `Foto ${titulo}`,
            titulo: titulo,
            preco: preco,
            categoria: categoria,
            descricao: descricao,
        })
    })
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}
async function buscaProduto(termoBusca){
    const conexao = await fetch(`http://localhost:3000/produtos?q=${termoBusca}`) 
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}

export const conectaAPI = {
    getAPI,
    postAPI,
    postMensagem,
    removeProduto,
    atualizaProduto,
    detalhaProduto,
    buscaProduto
}