import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreFormComponent } from './form/score-form/score-form.component';
import { ScoreComponent } from './score.component';


const ScoreRoutes = [
  {
    path: '',
    component: ScoreComponent
  },
  {
    path: 'cadastro',
    component: ScoreFormComponent
  },
  {
    path: ':id',
    component: ScoreFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(ScoreRoutes)],
  exports: [RouterModule]
})
export class ScoreRoutingModule { }
