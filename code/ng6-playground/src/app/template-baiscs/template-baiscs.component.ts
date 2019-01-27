import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-baiscs',
  templateUrl: './template-baiscs.component.html',
  styleUrls: ['./template-baiscs.component.css']
})
export class TemplateBaiscsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myObject = {
    name: 'Muni',
    age: 33,
    location: 'Bangalore'
  }

  lstEmp = [
    {
      name: 'Muni',
      age: 33,
      location: 'Bangalore'
    },
    {
      name: 'Raj',
      age: 33,
      location: 'Bangalore'
    },
    {
      name: 'Muniraj',
      age: 33,
      location: 'Bangalore'
    }
  ]

}
