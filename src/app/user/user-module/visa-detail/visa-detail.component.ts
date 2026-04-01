import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { UserService } from '../../../core/user.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { CORE_IMPORTS } from '../../../imports/core-imports';
import { MATERIAL_IMPORTS } from '../../../imports/material-imports';
@Component({
  selector: 'app-visa-detail',
  standalone: true,
  imports: [SharedModule, ...CORE_IMPORTS, ...MATERIAL_IMPORTS],
  templateUrl: './visa-detail.component.html',
  styleUrl: './visa-detail.component.scss'
})
export class VisaDetailComponent {
  isUserLogin = false;
  countryName: any;

  constructor(
    private userService: UserService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.countryName = this.userService.countryName;
    this.isUserLogin = this.userService.isUserLogin;
  }

  startApplication(price: string) {
    this.userService.visaObject = {
      visaType: "eVisa",
      stayDuration: "90 Days",
      visaValidity: "365 Days",
      processingTime: "5 working days",
      price: price
    };
    (this.isUserLogin) ? this.pageNavigate('userDetails') : this.pageNavigate('login');
  }

  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }
}