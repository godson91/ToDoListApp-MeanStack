import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MyDays } from '../mydays.service';

@Component({
  selector: 'app-my-bindings',
  templateUrl: './my-bindings.component.html',
  styleUrls: ['./my-bindings.component.css']
})
export class MyBindingsComponent  {
  name = "";

  //tells Angular newname will be passed from the parent element app.component.html
  @Input() newname;

  //We want the parent element to listen to we need to send it out as an event so we need eventemitter
  //Output lets parent element know that there is an output from this compononet
  @Output() clicked = new EventEmitter();

  days = this.myDaysService.getDays();
  constructor( public myDaysService: MyDays) { 
  }

  formSubmit(){
    console.log("submitted");
  }


  //event binding
  changeTheName(){
   alert(this.name);
  }
 
}
