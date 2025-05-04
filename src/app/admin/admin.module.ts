import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { MatSortModule } from '@angular/material/sort';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ApiService } from '../core/api.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule, 
    MatSortModule,
    SharedModule
  ],
  exports:[
    MatSortModule,
    SharedModule
  ],
})
export class AdminModule { }
