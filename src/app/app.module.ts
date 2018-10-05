import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { FuncionariosComponent } from './component/funcionarios/funcionarios.component';
import { TabelaComponent } from './component/tabela/tabela.component';
import { CardserviceComponent } from './component/cardservice/cardservice.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionariosComponent,
    TabelaComponent,
    CardserviceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
