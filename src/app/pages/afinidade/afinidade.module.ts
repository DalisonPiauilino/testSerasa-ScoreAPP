import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfinidadeRoutingModule } from './afinidade-routing.module';
import { AfinidadeFormComponent } from './form/afinidade-form/afinidade-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    AfinidadeFormComponent
  ],
  imports: [
    CommonModule,
    AfinidadeRoutingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class AfinidadeModule { }
