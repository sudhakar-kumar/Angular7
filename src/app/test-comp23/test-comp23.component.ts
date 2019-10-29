import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp23',
  templateUrl: './test-comp23.component.html',
  styleUrls: ['./test-comp23.component.css']
})
export class TestComp23Component implements OnInit {

  class_blue="ClassBlue";
  class_brown="ClassBrown";
  clickCounter = 0;

  constructor() { }

  ngOnInit() {
  }

   fnClickCounter(){
     this.clickCounter++;
   }

}
