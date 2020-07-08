import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-studentdatails',
  templateUrl: './studentdatails.component.html',
  styleUrls: ['./studentdatails.component.css']
})
export class StudentdatailsComponent implements OnInit {

  constructor(private myActivateRoute: ActivatedRoute, private myservice: TestService,private router:Router) { 
   this.id=this.myActivateRoute.snapshot.params["id"];
  }
  
id
student

  ngOnInit() {
     this.getid();
     this.update;
     this.Delete;
  }
  getid(){
  this.myservice.getstudentbyid(this.id)
     .subscribe((student)=>{
    //console.log(student)
    this.student=student;
},
(err)=>{
  console.log(err)
}
)
}



@Output()  myEvent= new  EventEmitter()
update(name,age){  
  this.student={name,age}
  this.myservice.updatastudent(this.id,this.student)  
   .subscribe((student)=>{
    this.myEvent.emit(this.student)   
    console.log(this.student)
    this.router.navigate(['students']);
},
(err)=>{
  console.log(err)
}
)
}



Delete(){
  this.myservice.deletestudent(this.id)  
  .subscribe((student)=>{
   console.log(student)
     if(student)
    this.student=student
    this.router.navigate(['students']);
},
(err)=>{
 console.log(err)
}
  )
}

}
