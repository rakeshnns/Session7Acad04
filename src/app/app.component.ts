import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  remain: boolean;  /* Reminder chack varable */
  /* Array of Object */
  Users = [
  {name: `Rakesh`, Age: 32},
  {name: `Sree`, Age: 26},
  {name: `Nachu`, Age: 2}
  ];

  /* ngStyle function call with parameter of Array Index */
  getStyle(ArrayIndex: number) {
    let rowStyle;
    /* Checking if reminder of array index divided by 2 is 0 or not. */
    if (ArrayIndex % 2 === 0) {
          this.remain = false;
    } else {
      this.remain = true;
    }
    /*Here color is red if remain  is true i.e reminder is not 0
      and color is green when remain is false i.e reminder s 0 */
    rowStyle = {'color': this.remain ? 'red' : 'green'};
    /* returning the style to DOM */
    return rowStyle;
  }
}
