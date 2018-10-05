import { Component, OnInit } from '@angular/core';

import { FuncionarioService } from '../../services/funcionario.service';
import { NgForm } from '@angular/forms';
import { Funcionario } from '../../models/funcionario';
import { teste } from '../../models/spreadsheets';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
  providers: [ FuncionarioService ]
})
export class FuncionariosComponent implements OnInit {
  //private LOGO = require("../../../logo.png");
  constructor(private funcionarioService:FuncionarioService) { }

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

}
