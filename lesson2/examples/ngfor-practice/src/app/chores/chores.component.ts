import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   
   chores = ["empty dishwasher", "pet dog", "do laundry"]
   
   constructor() { }

   ngOnInit() {
   }

}
