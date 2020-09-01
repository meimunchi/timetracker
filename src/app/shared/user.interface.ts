import { ICurrentEvent } from './currentEvent.interface';
import { IMainCalendar } from './mainCalendar.interface';


export interface IUser{
    email: string,
    firstName : string,
    lastName : string,
    currentEvents? :ICurrentEvent[],
    eventTemplates?: string[],
    mainCalendar: IMainCalendar,
}