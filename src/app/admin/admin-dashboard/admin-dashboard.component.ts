import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { AdminModule } from '../admin.module';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';

const BASE_64 = 'data:image/png;base64,';
const IMAGE_NOT_FOUND = 'assets/images/Image_not_available.png';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [AdminModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  tab = 'visa';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('viewApplication') viewApplication!: ElementRef;
  @ViewChild(MatSort) sort!: MatSort;
  liveAnnouncer = inject(LiveAnnouncer);
  formBuilder = inject(FormBuilder);
  visaTableColumn: string[] = ['Name', 'Email', 'Phone', 'DepartureDate', 'VisaType', 'Status', 'Action', 'ViewApplication'];
  contactTableColumn: string[] = ["Email", "Phone", "Address", "Message", 'Status', 'Action'];
  visaTableData: any;
  visaTable:any;
  contactTableData: any;
  contactTable:any;
  isMobile = false;
  passportFront = IMAGE_NOT_FOUND;
  passportBack = IMAGE_NOT_FOUND;
  transactionProof = IMAGE_NOT_FOUND;
  aadhaar = IMAGE_NOT_FOUND;
  educationalCertificate = IMAGE_NOT_FOUND;
  letter = IMAGE_NOT_FOUND;
  userDetailsFormGroup = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    sex: [''],
    birthDate: [''],
    placeOfBirth: [''],
    passportNumber: ['', [Validators.required]],
    passportIssueDate: [''],
    passportExpiryDate: [''],
    passportIssuePlace: [''],
    tentativeDepartureDate: [''],
    tentativeReturnDate: [''],
    currentAddressLine1: [''],
    currentAddressLine2: [''],
    pincode: [''],
    state: [''],
    city: [''],
    mobileNumber: [''],
    email: ['']
  });

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public apiService: ApiService,
    private toastr: ToastrService,
    private snackBar: MatSnackBar
  ) {
    this.getAllVisaRequest();
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  }

  openDialog(content: any): void {
    const dialogRef = this.dialog.open(content);
    dialogRef.afterClosed();
  }

  switchTab(tabName: string) {
    this.tab = tabName;
    if(tabName === 'contact') this.getAllContactRequest();
    setTimeout(() => {
      if (tabName === 'visa') {
        this.visaTableData.paginator = this.paginator;
        this.visaTableData.sort = this.sort;
      } else if (tabName === 'contact') {
        this.contactTableData.paginator = this.paginator;
        this.contactTableData.sort = this.sort;
      }
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  patchValue(data: any) {
    this.userDetailsFormGroup.patchValue({
      tentativeDepartureDate: data?.tentativeDepartureDate,
      tentativeReturnDate: data?.tentativeReturnDate,
      passportNumber: data?.passportNumber,
      passportIssueDate: data?.passportIssueDate,
      passportExpiryDate: data?.passportExpiryDate,
      passportIssuePlace: data?.passportIssuePlace,
      firstName: data?.firstName,
      lastName: data?.lastName,
      birthDate: data?.birthDate,
      placeOfBirth: data?.placeOfBirth,
      sex: data?.sex,
      pincode: data?.pinCode,
      city: data?.city,
      state: data?.state,
      currentAddressLine1: data?.currentAddressLine1,
      currentAddressLine2: data?.currentAddressLine2,
      mobileNumber: data?.mobileNumber,
      email: data?.email
    });
    this.passportFront = (data?.passportFront) ? BASE_64 + data?.passportFront : IMAGE_NOT_FOUND;
    this.passportBack = (data?.passportBack) ? BASE_64 + data?.passportBack : IMAGE_NOT_FOUND;
    this.transactionProof = (data?.transactionProof) ? BASE_64 + data?.transactionProof : IMAGE_NOT_FOUND;
    this.aadhaar = (data?.aadhaar) ? BASE_64 + data?.aadhaar : IMAGE_NOT_FOUND;
    this.educationalCertificate = (data?.educationalCertificate) ? BASE_64 + data?.educationalCertificate : IMAGE_NOT_FOUND;
    this.letter = (data?.letter) ? BASE_64 + data?.letter : IMAGE_NOT_FOUND;
    this.openDialog(this.viewApplication);
  }

  getVisaApplicationById(id: any) {
    this.resetUserData();
    this.apiService.getData(`visa/get-application-by-id?id=${id}`).subscribe({
      next: (response) => {
        const data = response?.data?.VisaApplication;
        this.patchValue(data)
        this.toasterMessage(response);
      },
      error: (err) => {
        this.toastr.error('Something went wrong. Please try again.', 'Warning!');
      }
    });
  }

  getAllVisaRequest() {
    this.apiService.getData('visa/get-all-visa').subscribe({
      next: (response) => {
        this.visaTable = this.visaTableData = response?.data?.oVisaApplication;
        this.visaTableData = new MatTableDataSource(this.visaTableData);
        this.visaTableData.sort = this.sort;
        this.visaTableData.paginator = this.paginator;
        this.snackBarMessage(response);
      },
      error: (err) => {
        this.snackBarNotification('Something went wrong. Please try again.');
      }
    });
  }

  adminDecision(email: string, action: string) {
    this.apiService.postDataWithoutRequestBody(`visa/change-status?id=${email}&status=${action}`).subscribe({
      next: (response) => {
        this.getAllVisaRequest();
        this.toasterMessage(response);
      },
      error: (err) => {
        this.toastr.error('Something went wrong. Please try again.', 'Warning!');
      }
    });
  }

  resetUserData() {
    this.passportFront = IMAGE_NOT_FOUND;
    this.passportBack = IMAGE_NOT_FOUND;
    this.transactionProof = IMAGE_NOT_FOUND;
    this.aadhaar = IMAGE_NOT_FOUND;
    this.educationalCertificate = IMAGE_NOT_FOUND;
    this.letter = IMAGE_NOT_FOUND;
    this.userDetailsFormGroup.reset();
  }

  getAllContactRequest() {
    this.apiService.getData('contact-us/get-all-request').subscribe({
      next: (response) => {
        this.contactTable = this.contactTableData = response?.data?.oContactApplication;
        this.contactTableData = new MatTableDataSource(this.contactTableData);
        this.contactTableData.sort = this.sort;
        this.contactTableData.paginator = this.paginator;
        this.snackBarMessage(response);
      },
      error: (err) => {
        this.snackBarNotification('Something went wrong. Please try again.');
      }
    });
  }

  markAsDone(email: string) {
    this.apiService.postDataWithoutRequestBody(`contact-us/change-status?id=${email}`).subscribe({
      next: (response) => {
        this.getAllContactRequest();
        this.toasterMessage(response);
      },
      error: (err) => {
        this.toastr.error('Something went wrong. Please try again.', 'Warning!');
      }
    });
  }

  toasterMessage(response: any) {
    if (response.errorMessage) {
      this.toastr.error(response.errorMessage, 'Warning!');
    } else {
      this.toastr.success(response.message, 'Success!');
    }
  }

  snackBarNotification(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  snackBarMessage(response: any) {
    if (response.errorMessage) {
      this.snackBarNotification(response.errorMessage);
    } else {
      this.snackBarNotification(response.message);
    }
  }

  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }
}