import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TestService {
baseURl:string="http://localhost:3000/students";
  constructor(private myclient:HttpClient) { }
  addstudents(name,age){
  return this.myclient.post(this.baseURl,{name:name,age:age});
  }
  getstudents(){
   return this.myclient.get(this.baseURl);

  }
  getstudentbyid(id){
    return this.myclient.get(`${this.baseURl}/${id}`);
 
   }
  deletestudent(id){
   return this.myclient.delete(`${this.baseURl}/${id}`);
  }
  updatastudent(id,data){
    return this.myclient.put(`${this.baseURl}/${id}`,data);
  }

}
