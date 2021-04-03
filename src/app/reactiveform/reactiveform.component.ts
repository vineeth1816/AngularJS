import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent  {

  loginForm:FormGroup;

  constructor(){
    this.loginForm=new FormGroup({
      name:new FormControl("",[Validators.required,Validators.pattern("[a-z]+"),Validators.minLength(3)]),
      pass:new FormControl(null,Validators.required)
    });
  }
  validate(){
    // alert("submit kottav babuuu");
    console.log(this.loginForm);
    console.log(this.loginForm.value.name);
    console.log(this.loginForm.value.pass);
    console.log(this.loginForm.invalid);
  }
  get name(){
    return this.loginForm.get("name");
  }
}
