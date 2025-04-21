import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
const imageExtensions = [".jpg", ".jpeg", ".png"];
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  constructor(
    private viewportScroller: ViewportScroller,
    private toastr: ToastrService,
    private router: Router) {

  }

  _formBuilder = inject(FormBuilder);
  Letter: File | null = null;
  Aadhaar: File | null = null;
  Educational: File | null = null;
  passportFront: File | null = null;
  passportBack: File | null = null;
  UPI: File | null = null;
  isUserDetailsSubmit = false;
  isDocUploaded = false;
  isPayment = false;
  transactionID: any;
  isMobile = false;
  minReturnDate: Date = new Date(new Date().setDate(new Date().getDate() + 1));
  userDetailsFormGroup = this._formBuilder.group({
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

    if (isImage && variable) {
      (this as any)[variable] = file;
    } else {
      this.toastr.error('Only image files are allowed!', 'Invalid File');
    }
  }

  onFileChange(event: any, controlName: string): void {
    const file = event.target.files?.[0];
    if (file) {
      this.userDetailsFormGroup.patchValue({ [controlName]: file });
      this.userDetailsFormGroup.get(controlName)?.markAsTouched();
      this.userDetailsFormGroup.get(controlName)?.updateValueAndValidity();
    }
  }


  masterSelected(event: Event, variable: string) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      (this as any)[variable] = fileInput.files[0];
    }
  }


  submitForm() {
    if (this.userDetailsFormGroup.invalid) {
      this.userDetailsFormGroup.markAllAsTouched();
      return;
    }

    const formData = new FormData();

    Object.keys(this.userDetailsFormGroup.controls).forEach(key => {
      const control = this.userDetailsFormGroup.get(key);
      if (control && control.value !== null && control.value !== undefined) {
        formData.append(key, control.value);
      }
    });

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    this.isUserDetailsSubmit = true;
  }
  submitDocuments() {
    this.isDocUploaded = true;
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