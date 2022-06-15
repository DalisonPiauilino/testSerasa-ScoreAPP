import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaComponent } from './pessoa.component';
import { PessoaFormComponent } from './form/pessoa-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PessoaComponent,
    PessoaFormComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    ReactiveFormsModule
  ]
})
export class PessoaModule { }
