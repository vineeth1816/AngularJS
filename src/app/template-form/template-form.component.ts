import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent{

  

  validate(myForm:NgForm){
    console.log(myForm);
    console.log(myForm.value.name);
    console.log(myForm.value.password);
    console.log(myForm.invalid);
    console.log(myForm.valid);
  }
}
