import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    FpasswordComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    SignupComponent,
    FpasswordComponent,
    HeaderComponent
  ],
})
export class AuthenticationModule { }
