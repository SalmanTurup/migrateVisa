import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ViewportScroller } from '@angular/common';
import { ApiService } from '../../../core/api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy {
  email = "migrateVisa@gmail.com"
  contactForm = {
    email: '',
    phone: '',
    address: '',
    message: ''
  };

  constructor(
    private viewportScroller: ViewportScroller,
    public apiService: ApiService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  saveContactRequest() {
    if (this.contactForm.email && this.contactForm.phone, this.contactForm.address, this.contactForm.message) {
      this.apiService.postDataWithBody('contact-us/save', this.contactForm).subscribe({
        next: (response) => {
          this.resetForm();
          if (response.errorMessage) {
            this.toastr.error(response.errorMessage, 'Warning!');
          } else {
            this.toastr.success(response.message, 'Success!');
          }
        },
        error: (err) => {
          this.toastr.error('Something went wrong. Please try again.', 'Warning!');
        }
      });
    } else {
      this.toastr.error('Please fill in all required fields', 'Validation Error');
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
