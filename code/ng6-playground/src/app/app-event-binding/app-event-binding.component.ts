import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-event-binding',
  templateUrl: './app-event-binding.component.html',
  styleUrls: ['./app-event-binding.component.css']
})
export class AppEventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickEvent(event){
    console.log(event);
  }

  mouseover(event){
    console.log("mouse over event fired");
    console.log(event);
  }
}
