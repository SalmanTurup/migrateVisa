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

  constructor(private viewportScroller: ViewportScroller,
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
          this.toastr.success(response?.message, 'Success');
        }
        ,
        error: (err) => this.toastr.error('Error:', err),
      });
    }else{
      this.toastr.error('Please fill in all required fields', 'Validation Error');
    }
  }

  ngOnDestroy(): void { }

}
