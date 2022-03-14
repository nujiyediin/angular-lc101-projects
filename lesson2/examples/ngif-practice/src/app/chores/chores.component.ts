import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'eat snacks', 'do laundry'];

   targetImage = 'https://www.hexagonmi.com/-/media/Images/Hexagon/Hexagon%20MI/Solutions/Industries/Other%20Cool%20Stuff/Other_cool_stuff_hero.ashx?h=885&w=1680&la=en-SG&hash=AE1ED8450A1D5A5FB67E2336C091A809';

   constructor() { }

   ngOnInit() {
   }

}
