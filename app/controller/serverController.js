export class serverController{
    constructor(){
        this._produtos = "https://json-server-alurageek.herokuapp.com/produtos"
        this._mensagens = "https://json-server-alurageek.herokuapp.com/mensagens"
    }

    async getProdutos(){
        const conexao = await fetch(this._produtos)
        const conexaoConvertida = await conexao.json()
        return conexaoConvertida
    }

    static async postProdutos(src, titulo, preco, categoria, descricao){
        const conexao = await fetch("https://json-server-alurageek.herokuapp.com/produtos",{
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

    async postMensagem(nome,mensagem){
        const conexao = await fetch(this._mensagens,{
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

    static async removeProduto(id){
        const conexao = await fetch(`https://json-server-alurageek.herokuapp.com/produtos/${id}`, {
            method: 'DELETE'
        })
        return conexao
    }
    
    async detalhaProduto(id){
        const conexao = await fetch(`${this._produtos}/${id}`) 
        const conexaoConvertida = await conexao.json()
        return conexaoConvertida
    }
    
    async atualizaProduto(src,titulo, preco, categoria, descricao,id){
        const conexao = await fetch(`${this._produtos}/${id}`,{
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
    
    async buscaProduto(termoBusca){
        const conexao = await fetch(`${this._produtos}?q=${termoBusca}`) 
        const conexaoConvertida = await conexao.json()
        return conexaoConvertida
    }
}
