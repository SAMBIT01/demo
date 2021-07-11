import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { FormsModule } from '@angular/forms';
import { SiliconPipe } from './silicon.pipe';
import { HeaderComponent } from './header/header.component';
import { CompanyComponent } from './about/company/company.component';
import { TeamComponent } from './about/team/team.component';
import { CareerComponent } from './about/career/career.component';
import { DeliverComponent } from './services/deliver/deliver.component';
import { ServicesComponent } from './services/services.component';
import { PackageComponent } from './services/package/package.component';
import { ExpressComponent } from './services/express/express.component';
import { PartnersComponent } from './partners/partners.component';
import { Link1Component } from './partners/link1/link1.component';
import { Link2Component } from './partners/link2/link2.component';
import { Link3Component } from './partners/link3/link3.component';




@NgModule({
  declarations: [
    AppComponent,
    SiliconPipe,
    HeaderComponent,
    CompanyComponent,
    TeamComponent,
    CareerComponent,
    DeliverComponent,
    ServicesComponent,
    PackageComponent,
    ExpressComponent,
    PartnersComponent,
    Link1Component,
    Link2Component,
    Link3Component

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
