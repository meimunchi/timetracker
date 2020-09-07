import { Component, Input, OnInit } from '@angular/core'
import { IUser } from '../../shared/user/user.interface'
import { Observable } from 'rxjs'
import { UserService } from '../../shared/user/user.service'
import { DaysOfWeek } from './daysOfWeek'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() user$: Observable<IUser>;
  user: IUser;

  timeArrs: number[][];
  daysOfWeek: DaysOfWeek[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user$.subscribe(user => {
      this.user = user;

      const calendarEntries = Object.entries(this.user.mainCalendar);
      calendarEntries.sort(([dayA,timeArrA], [dayB,timeArrB]) => {
        return this.getIndexFromDay(dayA as DaysOfWeek) - this.getIndexFromDay(dayB as DaysOfWeek);
      })

      this.timeArrs = calendarEntries.map(([_, timeArr]) => timeArr);
      this.daysOfWeek = calendarEntries.map(([day, _]) => day as DaysOfWeek);
    })
  }

  getTimeStamp(index: number): string {
    if (index % 24 === 0) {
      return '12';
    } else if (index % 2 === 0) {
      return ((index / 2) % 12).toString();
    } else {
      return '';
    }
  }

  getAmPm(index: number) {
    if ((index % 2 == 0) && (index < 24)) {
      return 'AM';
    } else if ((index % 2 == 0) && (index >= 24)) {
      return 'PM';
    } else {
      return '';
    }
  }

  getIndexFromDay(day: DaysOfWeek) {
    switch(day) {
      case 'Sunday': return 0;
      case 'Monday': return 1;
      case 'Tuesday': return 2;
      case 'Wednesday': return 3;
      case 'Thursday': return 4;
      case 'Friday': return 5;
      case 'Saturday': return 6;
    }
  }

  getDayFromIndex(index: number): DaysOfWeek {
    switch(index) {
      case 0: return 'Sunday';
      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
      case 6: return 'Saturday';
    }
  }

  setTimeArrs(timeArr: number[], index: number) {
    this.user.mainCalendar[this.getDayFromIndex(index)] = timeArr;
    this.userService.updateMainCalendar(this.user)
  }
}
