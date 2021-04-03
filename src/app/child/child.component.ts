import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  childname:string;

  @Output()
  eventEmitter=new EventEmitter<string>();
  
  @Output()
  e=new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  flag:boolean=true;
  hidepara(){
    this.flag=false;
  }

  sendToParent(status:boolean){
    // this.eventEmitter.emit(status);
    this.eventEmitter.emit("Hello boss")
    this.e.emit(true);
  }

}
