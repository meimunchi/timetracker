import { Component, OnInit } from '@angular/core';
import { SelectOption } from './select-option'

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {
  timeArr: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  selectOption: SelectOption | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  selectFromHere(index: number): void {
    const value = (this.timeArr[index] === 0) ? 1 : 0;
    this.timeArr[index] = value;
    this.selectOption = { index, value };
  }

  stopSelectHere(): void {
    this.selectOption = null;
    // TODO: Create an event option here
  }

  includeSelect(index: number): void {
    if (this.selectOption) {
      this.timeArr[index] = this.selectOption.value;
    }
    // TODO: else show them event name
  }
}
