import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myng-style',
  templateUrl: './myng-style.component.html',
  styleUrls: ['./myng-style.component.css']
})
export class MyngStyleComponent implements OnInit {
  private color:string;
  private fontSize:number;
  constructor() { }

  ngOnInit() {
  }

  apply(color:string,fontSize:number){
    this.color = color;
    this.fontSize = fontSize;
  }
}
