import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumOneComponent } from './layouts/colum-one/colum-one.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';



@NgModule({
  declarations: [
    
  
    ColumOneComponent,
            HomeHeaderComponent
  ],
  imports: [
    CommonModule
  ]
  ,exports:[
    ColumOneComponent
  ]
})
export class SharedModule { }
