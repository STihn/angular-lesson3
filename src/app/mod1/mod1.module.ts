import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod1Component } from './mod1.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Mod1Component, SearchPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [Mod1Component]
})
export class Mod1Module { }
