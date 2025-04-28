import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../user/user-module/footer/footer.component';
import { HeaderComponent } from '../user/user-module/header/header.component';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { NgOtpInputModule } from 'ng-otp-input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatListModule,
    NgOtpInputModule,
    MatPaginator,
    MatPaginatorModule,
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatTooltipModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatListModule,
    NgOtpInputModule,
    MatPaginator,
    MatPaginatorModule,
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatTooltipModule,
    HttpClientModule
  ],
})
export class SharedModule { }