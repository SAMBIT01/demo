import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';
@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myDate= Date.now();

constructor() { }
// heading="angular blur tutorial with examples";


enteredEmail:string="";

blurEvent(event: any) {
  this.enteredEmail=event.target.value;
  console.log(this.enteredEmail);
  alert("onblur")
}


onFocusEvent(){
    // console.log(event.target.value);
    // x.style.background = "yellow";
   
    alert("onfocus")
   
}
ngOnInit(): void {
}
mouseOverTesting(){
    // alert("mouse testing" );
}
showMessageParam = false;
myName='Your name is:';
myAddress='Your address is:'
placeHolderVar='Enter your name'
hrefVar="https://www.google.com/"
students= [{rollNo: 1, name: 'Sambit'},
{rollNo: 2, name: 'Avilipsa'},
{rollNo: 3, name: 'Abhinav'}]
users ={name:'Sambit',dist:'Nayagarh'};

myUsers ={
  dob:'07/27/2001',
  salary: 1300.89


};

value =0;
myColourName='green';
myBgColour ='white';
myChoice = 'black';
classname1='colourCode';
classname2='cancelbtn';
money=100;
decimal=5.097;
tar=6;
myMsg="";
showMessage(myTextValue:any){
this.myColourName='red';
this.myBgColour ='blue';
this.myChoice ='grey';
this.showMessageParam = true;
this.value =myTextValue;
// console.log("cancel button works"); 
// alert("cancel button works");


}


}
