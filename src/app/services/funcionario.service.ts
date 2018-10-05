import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Funcionario } from '../models/funcionario';
import { teste } from '../models/spreadsheets';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  selectFuncionario:Funcionario;
  funcionarios:Funcionario[];
  vgoogle:teste[];
  readonly URL_API = 'http://localhost:3000/api/'; 
  readonly URL_GOOGLE = 'https://spreadsheets.google.com/feeds/list/1er16WaNOIxKDGf5TrIrGHHje_7IC9lXyykv1V6t4vbo/od6/public/values?alt=json'; 
  constructor(private http: HttpClient) {
    this.selectFuncionario = new Funcionario();
   }
 
  getFuncionarios(){
    //return this.http.get("https://spreadsheets.google.com/feeds/list/1er16WaNOIxKDGf5TrIrGHHje_7IC9lXyykv1V6t4vbo/od6/public/values?alt=json");
    return this.http.get(this.URL_API);
  }

  getGoogleSheet(){
    return this.http.get(this.URL_GOOGLE);
  }

  stringToObject(Linha){
    const Frase=Linha.split(",");
    const fase3={};
    Frase.forEach(function(value,key) {
      Object.defineProperty(fase3, value.split(":")[0].trim(), {value : value.split(":")[1].trim(),
                           writable : true,
                           enumerable : true,
                           configurable : true});

                           
    });
    
    return Object.keys(fase3);
  }
  stringToObjectValue(Linha){
    const Frase=Linha.split(",");
    const fase3=[];
    Frase.forEach(function(value,key) {
      fase3.push(value.split(":")[1].trim());
                           
    });
    
    return fase3;
  }


  postFuncionarios(funcionario:Funcionario){
    return this.http.post(this.URL_API,funcionario);
  }
///:parametro/:nomeOld/:nomeNew'
  putFuncionarios(funcionario:Funcionario){
    return this.http.put(this.URL_API+ `/${funcionario._id}`,funcionario);
  }

  deltFuncionarios(_id:string){
    return this.http.delete(this.URL_API+ `/${_id}`);
  }
  
}
