export class TemplateModel{
    static modeloAviso(texto, link){
        if(link == '')
            return `
                <span class="texto__concluido">${texto}</span>
            `
        else{
            return `
                <span class="texto__concluido">${texto}</span>
                <a href="${link}" class="texto__concluido">Voltar</a>
            `
        } 
    }

    static modeloCard(src, alt, titulo, preco, id){
        return `
        <div class="container__edita">
            <button class="btn__icone btn__exclui"></button>
            <a href="../telas/produto-edicao.html?id=${id}"><button class="btn__icone btn__edita"></button></a>
            <img src="${src}" alt="${alt}">
        </div>
        <span class="texto__titulo">${titulo}</span>
        <span class="texto__negrito">R$${parseFloat(preco).toFixed(2)}</span>
        <span class="texto__id"># ${id}</span>
        `
    }
    static modeloCardCliente(src, alt, titulo, preco, id){
        return `
        <img src="${src}" alt="${alt}">
        <span class="texto__titulo">${titulo}</span>
        <span class="texto__negrito">R$${parseFloat(preco).toFixed(2)}</span>
        <a href="telas/produto.html?id=${id}" class="texto__primario">Ver produto</a>
        `
    }
    static modeloCardSimilar(src, alt, titulo, preco, id){
        return `
        <img src="${src}" alt="${alt}">
        <span class="texto__titulo">${titulo}</span>
        <span class="texto__negrito">R$${parseFloat(preco).toFixed(2)}</span>
        <a href="produto.html?id=${id}" class="texto__primario">Ver produto</a>
        `
    }

}