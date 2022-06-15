import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/pessoas",
    pathMatch: 'full'
  },
  {
    path: 'pessoas',
    loadChildren: () => import('src/app/pages/pessoa/pessoa.module').then(m => m.PessoaModule),
  },
  {
    path: 'afinidades',
    loadChildren: () => import('src/app/pages/afinidade/afinidade.module').then(m => m.AfinidadeModule),
  },
  {
    path: 'scores',
    loadChildren: () => import('src/app/pages/score/score.module').then(m => m.ScoreModule),
  },
  {
    path: 'error',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
