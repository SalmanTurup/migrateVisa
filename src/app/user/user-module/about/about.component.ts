import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ViewportScroller } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../core/api.service';
import { CORE_IMPORTS } from '../../../imports/core-imports';
import { MATERIAL_IMPORTS } from '../../../imports/material-imports';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedModule, ...CORE_IMPORTS, ...MATERIAL_IMPORTS],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy {
  contactForm = {
    email: '',
    phone: '',
    address: '',
    message: ''
  };

  constructor(
    private viewportScroller: ViewportScroller,
    private apiService: ApiService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  saveContactRequest() {
    if (this.contactForm.email && this.contactForm.phone, this.contactForm.address, this.contactForm.message) {
      this.apiService.postDataWithBody('contact-us/save-contact', this.contactForm).subscribe({
        next: (response) => {
          this.resetForm();
          if (response?.errorMessage) {
            this.toastr.error(response?.errorMessage, 'Warning!');
          } else {
            this.toastr.success(response?.message, 'Success!');
          }
        },
        error: (err) => {
          if (err?.errorMessage) {
            this.toastr.error(err?.errorMessage, 'Warning!');
          } else if (err?.error) {
            if (err?.error?.errorMessage) {
              this.toastr.error(err?.error?.errorMessage, 'Warning!');
            } else {
              this.toastr.error(err?.error, 'Warning!');
            }
          } else {
            this.toastr.error('Something went wrong. Please try again.', 'Warning!');
          }
        }
      });
    } else {
      this.toastr.error('Please fill in all required fields', 'Validation Error!');
    }
  }

  resetForm() {
    this.contactForm = {
      email: '',
      phone: '',
      address: '',
      message: ''
    };
  }

  ngOnDestroy(): void { }

}
