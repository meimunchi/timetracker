import { Component, Input, OnInit } from '@angular/core'
import { IUser } from '../../shared/user/user.interface'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() user$: Observable<IUser>;

  daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed'];
  // = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  timeStamps: number[] = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  timeArrs: number[][] = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ];

  getTimeStamp(index: number): string {
    // {{ ((i % 2) === 0) ? (i / 2) : '' }}
    if (index % 24 === 0) {
      return '12';
    } else if (index % 2 === 0) {
      return ((index / 2) % 12).toString();
    } else {
      return '';
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      console.log(user)
    })
    console.log('Hello')
  }

}
