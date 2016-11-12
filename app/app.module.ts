import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { Dashboard, FormEmprestimo } from './controller';
import { InputLabel } from './components/inputLabel.component'
import { EmprestimoService } from './services/emprestimo.service';

@NgModule({
  imports:[ BrowserModule,routing , FormsModule ],
  declarations: [ AppComponent, Dashboard, FormEmprestimo, InputLabel],
  providers: [appRoutingProviders, EmprestimoService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }