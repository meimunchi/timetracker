import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent implements OnInit {
  

  displayedColumns: string[] = ['dayTimes','Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday'];
 
  constructor() { }
  dataSource=[
    {time:"7:00",sun:0,mon:0,tue:0,wed:0,thur:0,fri:0,sat:0},
    {time:"7:00",sun:0,mon:0,tue:0,wed:0,thur:0,fri:0,sat:0},
    {time:"7:00",sun:0,mon:0,tue:0,wed:0,thur:0,fri:0,sat:0},
    {time:"7:00",sun:0,mon:0,tue:0,wed:0,thur:0,fri:0,sat:0},
    {time:"7:00",sun:0,mon:0,tue:0,wed:0,thur:0,fri:0,sat:0},
    {time:"7:00",sun:0,mon:0,tue:0,wed:0,thur:0,fri:0,sat:0},
    {time:"7:00",sun:0,mon:0,tue:0,wed:0,thur:0,fri:0,sat:0},
  ];
 /* dataSource = [
    
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];*/
  ngOnInit(): void {
  }

}
