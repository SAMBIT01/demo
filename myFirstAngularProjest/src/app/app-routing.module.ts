import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent} from './authentication/signup/signup.component';
import { CompanyComponent } from './about/company/company.component';


const routes: Routes = [
  {path: 'home' , component: LoginComponent},
  {path: 'company' , component:CompanyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
