import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild("myvar")
  child:ChildComponent;

  name:string="hello world"
  constructor() { }
  status:boolean=true;
  ngOnInit(): void {
  }

  accessChild(){
    this.child.hidepara();
  }

  hidePara(n:string){
    //this.status=flag;
    this.name=n;

}
hpara(b:boolean){
  alert("hello");
}
}
