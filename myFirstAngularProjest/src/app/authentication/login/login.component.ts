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
showMessageParam = false;
myName='Your name is:';
myAddress='Your address is:'
placeHolderVar='Enter your name'
hrefVar="https://www.google.com/"
students= [{rollNo: 1, name: 'Sambit'},
{rollNo: 2, name: 'Avilipsa'},
{rollNo: 3, name: 'Abhinav'}]

users ={name:'Sambit',dist:'Nayagarh'}

value =0;
myColourName='green';
myBgColour ='white';
myChoice = 'black';
classname1='colourCode';
classname2='cancelbtn';
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