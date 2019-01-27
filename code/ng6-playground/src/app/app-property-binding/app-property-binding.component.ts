import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-property-binding',
  templateUrl: './app-property-binding.component.html',
  styleUrls: ['./app-property-binding.component.css']
})
export class AppPropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Emp = {
    name: 'Muni',
    active: true,
    sal: 10000
  }

}
