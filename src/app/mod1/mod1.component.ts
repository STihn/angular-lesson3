import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
export class Mod1Component implements OnInit {
  param: string = 'привет';

  names = ['alice', 'angular', 'react', 'vue', 'sergey', 'mariya'];
  searchStr = '';
  constructor() { }

  ngOnInit(): void {
  }

}
