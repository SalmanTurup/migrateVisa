import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { UserService } from '../../../core/user.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../../core/api.service';
import * as CryptoJS from 'crypto-js';


const HARD_CODE_OTP = '00000';
const key = CryptoJS.enc.Utf8.parse('1234567890123456');
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  phoneNumber: any;
  otpValue = '';
  isOtpComplete = false;
  isOTPSend = false;
  modalRef: any;
  isUser = true;
  isAdmin = false;
  email: any;
  password: any;
  isLoading = false;
  userOTP: any;
  countdown: any;
  ResendOTP: any;
  intervalId: any;

  constructor(private router: Router,
    private viewportScroller: ViewportScroller,
    private userService: UserService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private apiService: ApiService
  ) { }
  
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  onOtpChange(otp: any) {
    this.isOtpComplete = (otp.length && otp.length === 5) ? true : false;
    this.otpValue = (this.isOtpComplete) ? otp : '';
  }

  sendOtp() {
    this.isLoading = true;;
    this.apiService.postDataWithoutRequestBody(`verification/send-otp?email=${this.email}`).subscribe({
      next: (response) => {
        const decrypted = CryptoJS.AES.decrypt(response?.otp, key, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        });
        this.userOTP = decrypted.toString(CryptoJS.enc.Utf8);
        this.isOTPSend = true;
        this.isLoading = false;
        this.startTimer();
        if (response.error) {
          this.toastr.error(response.message, 'Warning!');
        } else {
          this.toastr.success(response.message, 'Success!');
        }
      },
      error: (err) => {
        this.toastr.error('Something went wrong. Please try again.', 'Warning!'),
          this.isLoading = false;
      }
    });
  }

  startTimer() {
    this.countdown = 30;
    this.ResendOTP = false;
    this.intervalId = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      }
    }, 1000);

    setTimeout(() => {
      this.ResendOTP = true;
      clearInterval(this.intervalId);
    }, 30000);
  }

  verify() {
    if (this.isOtpComplete && this.otpValue && this.otpValue === this.userOTP) {
      this.userService.isUserLogin = true;
      this.userService.loginUserEmail = this.email;
      (this.userService.countryName) ? this.pageNavigate('visa') : this.pageNavigate('welcome');
      this.toastr.success('Logged in successfully.', 'Success');
    } else {
      this.toastr.error('The OTP you entered is incorrect. Please try again.', 'Invalid OTP');
    }
  }

  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }

  openDialog(content: any): void {
    const dialogRef = this.dialog.open(content);
    dialogRef.afterClosed();
  }

  changeUser() {
    this.isUser = (this.isUser) ? false : true;
    this.isAdmin = (this.isUser) ? false : true;
  }

  verifyAdmin(id: string, pass: string): void {
    if (id === 'salman.turup@gmail.com' && pass === '000000') {
      this.toastr.success('Logged in successfully.', 'Success');
      this.pageNavigate('admin');
    } else {
      this.toastr.error('Please enter valid credentials.', 'Warning');
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
