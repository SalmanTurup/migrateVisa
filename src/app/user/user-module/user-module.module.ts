import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ApiService } from '../../core/api.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [],
  providers:[ApiService]
})
export class UserModuleModule { }
