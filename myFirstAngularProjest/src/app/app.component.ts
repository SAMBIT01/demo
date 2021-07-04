import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstAngularProjest';
  myDate= Date.now();
  users ={name:'Sambit',dist:'Nayagarh'};


}
