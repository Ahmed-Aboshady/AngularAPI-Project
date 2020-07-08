import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private myservices:TestService) { }
students;
  ngOnInit() {
   this.getstudents();
  }
  getstudents(){
  this.myservices.getstudents()
    .subscribe((students)=>{
      console.log(students)
      if(students)
      this.students=students;
    },
      (err)=>{
        console.log(err)
      
    }
     )
    }
 

}
