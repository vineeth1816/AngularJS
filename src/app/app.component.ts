import { Component } from '@angular/core';
import { Employee } from 'src/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  emp=new Employee(1,"apple",20000);

  emp1:Employee[]=[new Employee(1,"apple",20000),
  new Employee(2,"banana",30000),
  new Employee(3,"orange",40000),
  new Employee(4,"guava",50000)]

  colors:string[]=["red","green","blue","yellow"];

  flag:boolean=true;

  status:string="hide div"
  hideFunction(){
    if(this.flag)
    {
    this.flag=false;
    this.status="show div";
    }
    else
    {
      this.flag=true;
      this.status="Hide div";
    }
  }

  username:string="abccc"
  password:string="";
  msg:string="";
  flag1:boolean=false;

  login(){
    if(this.username==="cts" && this.password==="1234"){
      this.flag1=true;
      this.msg="";
    }
    else{
      this.msg="Invalid login"
    }
  }
}
