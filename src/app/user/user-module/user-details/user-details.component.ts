import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DatePipe, ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/api.service';
import { UserService } from '../../../core/user.service';
const imageExtensions = [".jpg", ".jpeg", ".png"];
const MAX_IMAGE_SIZE_MB = 2;
const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * 1024 * 1024;
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  formBuilder = inject(FormBuilder);
  letter: File | null = null;
  aadhaar: File | null = null;
  educational: File | null = null;
  passportFront: File | null = null;
  passportBack: File | null = null;
  UPI: File | null = null;
  isUserDetailsSubmit = false;
  isDocUploaded = false;
  isPayment = false;
  transactionID: any;
  isMobile = false;
  minReturnDate: Date = new Date(new Date().setDate(new Date().getDate() + 1));
  userDetailsFormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    sex: ['', Validators.required],
    birthDate: ['', Validators.required],
    placeOfBirth: ['', Validators.required],
    passportNumber: ['', [Validators.required, Validators.pattern('^[A-Z0-9]{8,10}$')]],
    passportIssueDate: ['', Validators.required],
    passportExpiryDate: ['', Validators.required],
    passportIssuePlace: ['', Validators.required],
    tentativeDepartureDate: ['', Validators.required],
    tentativeReturnDate: ['', Validators.required],
    currentAddressLine1: ['', Validators.required],
    currentAddressLine2: ['', Validators.required],
    pincode: ['', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]],
    state: ['', Validators.required],
    city: ['', Validators.required],
    mobileNumber: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private viewportScroller: ViewportScroller,
    private toastr: ToastrService,
    private router: Router,
    private apiService: ApiService,
    private datePipe: DatePipe,
    private userSerivce: UserService,
  ) { }

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent, variable: string): void {
    event.preventDefault();
    event.stopPropagation();

    const files = event?.dataTransfer?.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const fileName = file.name.toLowerCase();
    const isImage = imageExtensions?.some(ext => fileName.endsWith(ext));

    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      this.toastr.error('Image must be less than 2MB!', 'File Too Large');
      return;
    }

    if (isImage && variable) {
      (this as any)[variable] = file;
    } else {
      this.toastr.error('Only image files are allowed!', 'Invalid File');
    }
  }

  masterSelected(event: Event, variable: string) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      if(fileInput.files[0] && fileInput.files[0].size > MAX_IMAGE_SIZE_BYTES){
        this.toastr.error('Image must be less than 2MB!', 'File Too Large');
      }else{
      (this as any)[variable] = fileInput.files[0];
      }
    }
  }

  saveVisaRequest(form: any) {
    if (!form.invalid) {
      const requestBody = new FormData();
      requestBody.append('userForm', new Blob([JSON.stringify(this.createRequestBody(form.value))], { type: 'application/json' }));
      if (this.passportFront) {
        requestBody.append('passportFront', this.passportFront);
      }
      if (this.passportBack) {
        requestBody.append('passportBack', this.passportBack);
      }
      if (this.UPI) {
        requestBody.append('transactionProof', this.UPI);
      }
      if (this.letter) {
        requestBody.append('letter', this.letter);
      }
      if (this.aadhaar) {
        requestBody.append('aadhaar', this.aadhaar);
      }
      if (this.educational) {
        requestBody.append('educationalCertificate', this.educational);
      }
      this.apiService.postMultiPartDataWithBody('visa/save', requestBody).subscribe({
        next: (response) => {
          this.isDocUploaded = true;
          if (response.errorMessage) {
            this.toastr.error(response.errorMessage, 'Warning!');
          } else {
            this.toastr.success(response.message, 'Success!');
          }
        },
        error: (err) => {
          if (err?.errorMessage) {
            this.toastr.error(err?.errorMessage, 'Warning!');
          } else if (err?.error) {
            this.toastr.error(err.error?.errorMessage, 'Warning!');
          } else {
            this.toastr.error('Something went wrong. Please try again.', 'Warning!');
          }
        }
      });
    } else {
      this.toastr.error('Please fill in all required fields of Basic Form', 'Validation Error');
    }
  }

  createRequestBody(form: any): any {
    return {
      email: form.email,
      visaType: this.userSerivce.visaObject.visaType,
      firstName: form.firstName,
      lastName: form.lastName,
      sex: form.sex,
      birthDate: this.datePipe.transform(form.birthDate, "dd/MM/yyyy"),
      placeOfBirth: form.placeOfBirth,
      passportNumber: form.passportNumber,
      passportIssueDate: this.datePipe.transform(form.passportIssueDate, "dd/MM/yyyy"),
      passportExpiryDate: this.datePipe.transform(form.passportExpiryDate, "dd/MM/yyyy"),
      passportIssuePlace: form.passportIssuePlace,
      tentativeDepartureDate: this.datePipe.transform(form.tentativeDepartureDate, "dd/MM/yyyy"),
      tentativeReturnDate: this.datePipe.transform(form.tentativeReturnDate, "dd/MM/yyyy"),
      currentAddressLine1: form.currentAddressLine1,
      currentAddressLine2: form.currentAddressLine2,
      pinCode: form.pincode,
      state: form.state,
      city: form.city,
      mobileNumber: form.mobileNumber,
      transactionId: this.transactionID ? this.transactionID : '',
      visaDetails: {
        visaType: this.userSerivce.visaObject.visaType,
        stayDuration: this.userSerivce.visaObject.stayDuration,
        visaValidity: this.userSerivce.visaObject.visaValidity,
        processingTime: this.userSerivce.visaObject.processingTime,
        price: this.userSerivce.visaObject.price
      }
    };
  }

  submitForm() {
    if (this.userDetailsFormGroup.invalid) {
      this.userDetailsFormGroup.markAllAsTouched();
      this.toastr.error('Please fill in all required fields of Basic Form', 'Validation Error');
      return;
    }
    this.isUserDetailsSubmit = true;
  }

  submitDocuments(formData: any) {
    this.saveVisaRequest(formData);
  }

  submitPayment() {
    if (!this.UPI && !this.transactionID) {
      this.toastr.error('Kindly upload the transaction proof or provide the transaction ID to proceed.', 'Missing Transaction Details');
      return;
    }
    this.isPayment = true;
  }

  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }
}