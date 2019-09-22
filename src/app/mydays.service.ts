import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})


export class MyDays {
  private  days = ['sunday', 'monday', 'tuesday', 'friday'];
  getDays(){
      return this.days;
  }

}