import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material/material.component';



@NgModule({
  declarations: [
    MaterialComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [MaterialComponent]
})
export class MaterialModule { }
