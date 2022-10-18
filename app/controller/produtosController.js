import { ProdutosModel } from "../model/ProdutosModel.js";
import { serverController } from "./serverController.js";

export class ProdutosController{
    pegaURL = new URL(window.location)
    id = this.pegaURL.searchParams.get('id')
    
    produto = new ProdutosModel()
    //secao = document.querySelector('[data-secao]')
    formulario = document.querySelector("[data-formulario]")


    async adicionaCard(){
        await serverController.postProdutos(
            this.produto.url.value,
            this.produto.titulo.value,
            this.produto.preco.value,
            this.produto.categoria.value,
            this.produto.descricao.value
        )
    }

    async deletaCard(evento){
        let ehBotaoDeDeleta = evento.target.className === 'btn__icone btn__exclui'
        if (ehBotaoDeDeleta) {
            evento.preventDefault()
            try {
                const cardProduto = evento.target.closest('[data-id]')
                let id = cardProduto.dataset.id
                await serverController.removeProduto(id)
                cardProduto.remove()
            }
            catch (erro) {
                console.log(erro)
            }
        }
        //document.location.reload(false)
    }

    async editaProduto(){
        try{
            const dados = await new serverController().detalhaProduto(this.id)
            this.produto.url.value = dados.src
            this.produto.titulo.value = dados.titulo
            this.produto.preco.value = dados.preco
            this.produto.categoria.value = dados.categoria
            this.produto.descricao.value = dados.descricao   
        }        
        catch(erro){
            console.log(erro)
        }
        this.formulario.addEventListener('submit', async (evento) => {
            evento.preventDefault()
        
            try{
                await new serverController().atualizaProduto(
                    this.produto.url.value,
                    this.produto.titulo.value,
                    this.produto.preco.value,
                    this.produto.categoria.value,
                    this.produto.descricao.value,
                    this.id
                )
                window.location.href = "../telas/admin.html"
            }
            catch(erro){
                console.log(erro)
            }
        })
    }

    async descricaoProduto(){
        try{
            const dados = await new serverController().detalhaProduto(this.id)
            this.produto.url.src = dados.src
            this.produto.titulo.innerText = dados.titulo
            this.produto.preco.innerText = `R$${parseFloat(dados.preco).toFixed(2)}`
            if(dados.descricao == ""){
                this.produto.descricao.innerText = "Nenhuma descrição do produto foi fornecida"
            }else{
                this.produto.descricao.innerText = dados.descricao
            }
    
        }catch(erro){
            console.log(erro)
        }
    }

}
