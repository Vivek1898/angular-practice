import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public msg:string='GOOD MORNING VIVEK';
  public time :string = new Date().toLocaleTimeString();
  constructor() { }

  ngOnInit(): void {
  }

  public getDate(){
    return new Date().toLocaleDateString();
  }

  public getTime(){
    return new Date().toLocaleTimeString();
  }
  public getTimeDigital(){
 setInterval(()=>{
  this.time = new Date().toLocaleTimeString();
 }
  ,1000);
  }
}
