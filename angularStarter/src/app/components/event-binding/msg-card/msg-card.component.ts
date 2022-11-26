import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg-card',
  templateUrl: './msg-card.component.html',
  styleUrls: ['./msg-card.component.css']
})
export class MsgCardComponent implements OnInit {

  public msg:string="Hello Vivek";

  constructor() { }

  ngOnInit(): void {
  }

  public sayGoodMorning():void{
    this.msg="Good Morning";
  }
  public sayGoodA():void{
    this.msg="Good AfterNoon";
  }
  public sayGoodE():void{
    this.msg="Good Evening";
  }

  public displayMsg(value:string){
    this.msg=value;
  }

}
