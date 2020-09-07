import { ICurrentEvent } from './currentEvent.interface';

export interface IMainCalendar{
  Sunday: number[];
  Monday: number[];
  Tuesday: number[];
  Wednesday: number[];
  Thursday: number[];
  Friday: number[];
  Saturday: number[];
}

export interface IUser{
    email: string,
    firstName : string,
    lastName : string,
    currentEvents? :ICurrentEvent[],
    eventTemplates?: string[],
    mainCalendar: IMainCalendar,
}
