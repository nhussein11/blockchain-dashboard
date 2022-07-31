import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileGuard } from './guards/profile.guard';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,

    PrimengModule
  ],
  //TODO: fix it
  providers:[
    ProfileGuard
  ]
})
export class AuthModule { }
