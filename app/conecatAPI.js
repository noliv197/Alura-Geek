async function getAPI(){
    const conexao = await fetch('http://localhost:3000/produtos')
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}

async function postAPI(src, alt, titulo, preco, categoria, descricao){
    const conexao = await fetch('http://localhost:3000/produtos',{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            src: src,
            alt: alt,
            titulo:titulo,
            preco: preco,
            categoria: categoria,
            descricao: descricao,
        })
    })
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}