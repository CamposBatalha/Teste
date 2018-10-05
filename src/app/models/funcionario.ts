export class Funcionario {

    constructor(_id='',nome='',setor='',cargo='',salario=''){
        this._id=_id;
        this.nome=nome;
        this.setor=setor;
        this.cargo=cargo;
        this.salario=salario;
    }
    
    _id:string;
    nome:string;
    cargo:string;
    setor:string;
    salario:string;


}

