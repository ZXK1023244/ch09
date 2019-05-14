import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myng-if',
  templateUrl: './myng-if.component.html',
  styleUrls: ['./myng-if.component.css']
})
export class MyngIfComponent implements OnInit {
  private sex: boolean;

  constructor() { 
    this.sex = true;
  }

  ngOnInit() {
  }

  changeSex(){
    if (this.sex == true) {
      this.sex = false;
    }else
      this.sex = true; 
      return false;  
  }
}
