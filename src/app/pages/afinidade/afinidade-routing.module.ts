import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfinidadeComponent } from './afinidade.component';
import { AfinidadeFormComponent } from './form/afinidade-form/afinidade-form.component';

const AfinidadeRoutes = [
  {
    path: '',
    component: AfinidadeComponent
  },
  {
    path: 'cadastro',
    component: AfinidadeFormComponent
  },
  {
    path: ':id',
    component: AfinidadeFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(AfinidadeRoutes)],
  exports: [RouterModule]
})
export class AfinidadeRoutingModule { }
