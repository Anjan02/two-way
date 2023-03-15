import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent {
  details:Student={
    id:1,
    name:"anjan",
    marks:90,
    fee:20000
  }
}
