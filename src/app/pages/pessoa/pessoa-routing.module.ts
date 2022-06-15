import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaFormComponent } from './form/pessoa-form.component';
import { PessoaComponent } from './pessoa.component';

const PessoaRoutes = [
  {
    path: '',
    component: PessoaComponent
  },
  {
    path: 'cadastro',
    component: PessoaFormComponent
  },
  {
    path: ':id',
    component: PessoaFormComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(PessoaRoutes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
