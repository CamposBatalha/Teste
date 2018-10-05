import { Component, OnInit } from '@angular/core';

import { TabelaService } from '../../services/tabela.service';
import { NgForm } from '@angular/forms';
import { Tabela } from '../../models/tabela';
import { teste } from '../../models/spreadsheets';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
  providers: [ TabelaService ]
})
export class TabelaComponent implements OnInit {

  constructor(private tabelaService:TabelaService) { }

  ngOnInit() {
    this.getFeedListLink();
    //this.getFeedList();
    
  }

  getFeedListLink() {
    this.tabelaService.getGoogleFeedsListLink('http://localhost:3000/API/');
    this.tabelaService.selectTabela.nome='Tiago Batalha.';
  }
  getFeedList() {
    this.tabelaService.getGoogleFeedsList()
    .subscribe(res => {
      this.tabelaService.selectTabela.content=res as string;
    });
  }
  getFeedGTabela() {
    this.tabelaService.selectTabela.feedListLink='https://spreadsheets.google.com/feeds/list/1er16WaNOIxKDGf5TrIrGHHje_7IC9lXyykv1V6t4vbo/od6/public/values?alt=json';
  }
  getFeedAPI(){
    this.tabelaService.selectTabela.feedListLink='http://localhost:3000/API/';
  }

  deltCardAPI(){
    
    this.tabelaService.delCard('5b876586f5323525d408f3ad')
      .subscribe(res => {
        //this.tabelaService.selectTabela.content=res as string;
        alert(JSON.stringify(res as string));
      });
    
  }
  /*
  ngOnInit() {
    this.getFuncionarios();
    this.getGoogleSheet();
  }

  getFuncionarios() {
    this.funcionarioService.getFuncionarios()
      .subscribe(res => {
        this.funcionarioService.funcionarios = res as Funcionario[];
      });
  }

  getGoogleSheet(){
    this.funcionarioService.getGoogleSheet()
      .subscribe(res=>{
        this.funcionarioService.vgoogle=res as teste[] ;
      }

      );
  }
  
  */

}
