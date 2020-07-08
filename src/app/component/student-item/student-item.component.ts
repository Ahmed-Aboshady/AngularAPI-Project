import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input ('studentinfo') student;

}
