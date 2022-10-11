export class ErroModel{
    constructor(){
        
        this._tiposErro = [
            'valueMissing',
            'typeMismatch',
            'patternMismatch',
        ];
        
        this._mensagemErro = {
            email: {
                valueMissing: 'O campo de email não pode estar vazio.',
                patternMismatch: 'Email inválido'
            },
            senha: {
                valueMissing: 'O campo de senha não pode estar vazio.',
                patternMismatch: 'Senha inválida'
            },
            nome:{
                valueMissing: 'Campo não pode estar vazio '
            },
            mensagem:{
                valueMissing: 'Campo não pode estar vazio '
            },
            url:{
                valueMissing: 'Campo não pode estar vazio ',
                typeMismatch: 'Url inválida'
            },
            categoria:{
                valueMissing: 'Campo não pode estar vazio '
            },
            titulo:{
                valueMissing: 'Campo não pode estar vazio '
            },
            preco:{
                valueMissing: 'Campo não pode estar vazio ',
                patternMismatch: 'Use somente números e "," para separar os decimais' 
            },
            descricao:{
                valueMissing: 'Campo não pode estar vazio '
            }
        };

    }

    mostraErro(campo,tipoCampo){
        let mensagem = '';
        this._tiposErro.forEach(erro => {
            if(campo.validity[erro]){
                mensagem = this._mensagemErro[tipoCampo][erro];
            }
        });

        return mensagem;
    }   
}