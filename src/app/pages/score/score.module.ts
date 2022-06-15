import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';
import { ScoreComponent } from './score.component';
import { ScoreFormComponent } from './form/score-form/score-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ScoreComponent,
    ScoreFormComponent
  ],
  imports: [
    CommonModule,
    ScoreRoutingModule,
    ReactiveFormsModule
  ]
})
export class ScoreModule { }
