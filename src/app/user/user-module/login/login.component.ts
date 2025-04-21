import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

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

  constructor(private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    window.otpless = (otplessUser) => {
      alert(JSON.stringify(otplessUser));
    };
  }
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  onOtpChange(otp: any) {
    this.otpValue = otp;
    this.isOtpComplete = otp.length === 5;

  }

  sendOtp() {
    this.isOTPSend = true;
  }

  verfiy() {
    this.pageNavigate(`/userDetails`);
  }

  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }

  ngOnDestroy(): void {
  }
}
