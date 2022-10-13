export class ProdutosModel{
    
    _inputUrl; 
    _inputTitulo;
    _inputPreco;
    _inputCategoria;  
    _inputDescricao;
    
    constructor(){
        this._inputUrl = document.querySelector("[data-url]")
        this._inputTitulo = document.querySelector("[data-titulo]")
        this._inputPreco = document.querySelector("[data-preco]")
        this._inputCategoria = document.querySelector("[data-categoria]")
        this._inputDescricao = document.querySelector("[data-descricao]")
    }

    get url() {
        return this._inputUrl;
    }
    get titulo() {
        return this._inputTitulo;
    }
    get preco() {
        return this._inputPreco;
    }
    get categoria() {
        return this._inputCategoria;
    }
    get descricao() {
        return this._inputDescricao;
    }

}