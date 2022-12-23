import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ResetComponent } from './reset/reset.component';

import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordDoneComponent } from './reset-password-done/reset-password-done.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
 declarations: [ResetComponent, ResetPasswordComponent, ResetPasswordDoneComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports :[
  ResetComponent
  ]
})
export class AuthModule { }
