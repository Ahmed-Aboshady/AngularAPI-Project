import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { TestService } from 'src/app/services/test.service';



@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private myservice: TestService) { 
  }
  ngOnInit() {
   this.addstudent;
  }
  students;
  @Output()  myEvent= new  EventEmitter()

    addstudent(name,age)
    {
       this.students={name,age}
      this.myEvent.emit(this.students)   
      console.log(this.students);
      this.myservice.addstudents(name,age)
      .subscribe((students)=>{
        //console.log(students)
        if(students)
        this.students=students
      
      },
        (err)=>{
          console.log(err)
      }
       )
}
 

}
