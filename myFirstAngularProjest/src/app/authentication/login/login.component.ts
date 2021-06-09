import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value = 2;
  showMessageParam = false;
 
  
  students= [{rollNo: 1, name: 'sambit'},
              {rollNo: 2, name: 'avilipsa'},
              {rollNo: 3, name: 'abhinav'}]

              



  showMessage(){
    this.showMessageParam = true;
    // console.log("cancel button works"); 
    // alert("cancel button works");
  }
}
