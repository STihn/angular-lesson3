import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod2Component } from './mod2.component';
import { JoinPipe } from './join.pipe';



@NgModule({
  declarations: [Mod2Component, JoinPipe],
  imports: [
    CommonModule
  ],
  exports: [Mod2Component]
})
export class Mod2Module { }
