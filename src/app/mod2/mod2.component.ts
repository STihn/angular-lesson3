import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mod2',
  templateUrl: './mod2.component.html',
  styleUrls: ['./mod2.component.css']
})
export class Mod2Component implements OnInit {

  familys = ['baza','ferdi', 'fendi','apple'];
  result = '';
  constructor() { }

  ngOnInit(): void {
  }

}
