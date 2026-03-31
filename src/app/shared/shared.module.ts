import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../user/user-module/footer/footer.component';
import { HeaderComponent } from '../user/user-module/header/header.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { NgOtpInputModule } from 'ng-otp-input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatIconModule,
    HeaderComponent,
    FooterComponent,
    MatExpansionModule,
    MatListModule,
    NgOtpInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatTooltipModule,
    HttpClientModule,
    MatCardModule
  ],
  exports: [
    MatIconModule,
    HeaderComponent,
    FooterComponent,
    MatExpansionModule,
    MatListModule,
    NgOtpInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatTooltipModule,
    HttpClientModule,
    MatCardModule
  ]
})
export class SharedModule { }