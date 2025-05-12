import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ViewportScroller } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedModule],
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
    public apiService: ApiService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  saveContactRequest() {
    if(this.contactForm.email && this.contactForm.phone , this.contactForm.address , this.contactForm.message){
      this.apiService.postDataWithBody('contact-us/save',this.contactForm).subscribe({
        next: (response) => {
          this.resetForm();
          if (response.errorMessage) {
            this.toastr.error(response.errorMessage, 'Warning!');
          } else {
            this.toastr.success(response.message, 'Success!');
          }
        },
        error: (err) => {
          if (err.errorMessage) {
            this.toastr.error(err.errorMessage, 'Warning!');
          } else if (err?.error) {
            this.toastr.error(err.error, 'Warning!');
          } else {
            this.toastr.error('Something went wrong. Please try again.', 'Warning!');
          }
        }
      });
    } else {
      this.toastr.error('Please fill in all required fields', 'Validation Error!');
    }
  }
  
  resetForm(){
    this.contactForm = {
      email: '',
      phone: '',
      address: '',
      message: ''
    };
  }

  ngOnDestroy(): void { }

}
