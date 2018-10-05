export class Tabela {

    constructor(_id='',nome='',autor='',email='',qtdLinha='',qtdColunas='',
    feedListLink='',content=''){
        this._id=_id;
        this.nome=nome;
        this.autor=autor;
        this.email=email;
        this.qtdLinha=qtdLinha;
        this.qtdColunas=qtdColunas;
        this.feedListLink=feedListLink;
        this.content=content;
        
    }
    
    _id:string;
    nome:string;
    autor:string;
    email:string;
    qtdLinha:string;
    qtdColunas:string;
    feedListLink:string;
    content:string;


}
