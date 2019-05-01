import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  dropdownlist=[
    {"value":"contact form"},
    {"value":"Login form"},
    {"value":"Signin form"},
  ]
}
