import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value = 15;
  showMessageParam = false;
  showMessage(){
    this.showMessageParam = true;
    // console.log("cancel button works"); 
    // alert("cancel button works");
  }
}
