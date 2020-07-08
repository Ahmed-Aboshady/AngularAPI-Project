import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes}from '@angular/router';
import{HttpClientModule}from '@angular/common/http'
import { AppComponent } from './app.component';
import { StudentsComponent } from './component/students/students.component';
import { AboutComponent } from './component/about/about.component';
import { AddstudentComponent } from './component/addstudent/addstudent.component';
import { ErrorComponent } from './component/error/error.component';
import { StudentdatailsComponent } from './component/studentdatails/studentdatails.component';
import { NavComponent } from './component/nav/nav.component';
import{ TestService} from './services/test.service';
import { StudentItemComponent } from './component/student-item/student-item.component';


const routes:Routes=[
  {path:'',redirectTo:'students',pathMatch:'full'},
  {path:'students',component:StudentsComponent},
  {path:'students/:id',component:StudentdatailsComponent},
  {path:'addstudent',component:AddstudentComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:ErrorComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AboutComponent,
    AddstudentComponent,
    ErrorComponent,
    StudentdatailsComponent,
    NavComponent,
    StudentItemComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
