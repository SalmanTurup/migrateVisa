import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatSortModule,
    SharedModule
  ],
  exports : [
    CommonModule,
    HttpClientModule,
    MatSortModule,
    SharedModule,
  ]
})
export class AdminModule { }
