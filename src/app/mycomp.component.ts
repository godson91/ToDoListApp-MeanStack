import { Component} from '@angular/core';
import {MyDays} from './mydays.service';

@Component({
    //selectors can be used as a html tag inside of any template file
    selector: 'app-mycomp',
    templateUrl: 'mycomp.html'
})

export class MyCompComponent {
    constructor(public myDaysService: MyDays){

    }

    name = "Micheala Abor";
    days = this.myDaysService.getDays();
    isWeekend = false;

}