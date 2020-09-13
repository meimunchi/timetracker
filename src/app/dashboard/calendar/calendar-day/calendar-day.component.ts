import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { SelectOption } from './select-option'

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {
  @Input() timeArr: number[];
  @Input() dayIndex: number;
  @Output() setTimeArr = new EventEmitter<number[]>();
  selectOption: SelectOption | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  // TODO: Functionality only works on desktop
  selectFromHere(index: number): void {
    const oppositeValue = (this.timeArr[index] === 0) ? 1 : 0;
    this.timeArr[index] = oppositeValue;
    this.selectOption = { index, value: oppositeValue };
  }

  stopSelectHere(): void {
    if (this.selectOption) {
      this.setTimeArr.emit(this.timeArr);
    }
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
