import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitComponent } from './submit/submit.component';



@NgModule({
  declarations: [
    SubmitComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SubmitComponent
  ]
})
export class LoginModule { }
