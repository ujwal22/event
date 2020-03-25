import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name:string=null;
 email:string=null;
 password:string=null;
 city:string=null;
 country:string=null;
 userInputData="vaibhav";
 childdata;

 myStyle={'color':'white','background-color':'grey','width':'250px','height':'150px','position':'relative'};
 
 isTextdisplay=true;
 isTextdisplay1=true;
 isTextdisplay2=true;

 displayText(event){
  this.isTextdisplay = false;
  }
 displaydata(){
this.isTextdisplay1 = false;
 }

 displayInputBox(){
  this.isTextdisplay2=false;
 }
}