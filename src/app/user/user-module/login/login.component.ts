import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { UserService } from '../../../core/user.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

const HARD_CODE_OTP = '00000'
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

  constructor(private router: Router,
    private viewportScroller: ViewportScroller,
    private userService: UserService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) { }
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  onOtpChange(otp: any) {
    this.isOtpComplete = (otp.length && otp.length === 5) ? true : false;
    this.otpValue = (this.isOtpComplete) ? otp : '';
  }

  sendOtp() {
    this.isOTPSend = true;
  }

  verify() {
    if (this.isOtpComplete && this.otpValue && this.otpValue === HARD_CODE_OTP) {
      this.userService.isUserLogin = true;
      (this.userService.countryName) ? this.pageNavigate('visa') : this.pageNavigate('');
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

  ngOnDestroy(): void {
  }
}
