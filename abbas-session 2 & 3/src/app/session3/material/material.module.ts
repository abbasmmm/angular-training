import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material/material.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDivider, MatDividerModule } from '@angular/material/divider'

const routes: Routes = [
  { path: '', component: MaterialComponent }
]

@NgModule({
  declarations: [
    MaterialComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [MaterialComponent]
})
export class MaterialModule { }
