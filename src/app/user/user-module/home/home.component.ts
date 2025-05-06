import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ViewportScroller } from '@angular/common';
import { UserService } from '../../../core/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  isMobile: any;
  countryData: any;
  activeLabel: string = 'Popular';
  buttonLabels: string[] = [
    'Popular',
    'Visa in week',
    'Easy Visa',
    'Schengen Visa',
    'Visa Free'
  ];

  constructor(
    private viewportScroller: ViewportScroller,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
    this.countryData = this.userService.countryData;
  }

  setCountry(country: any) {
    this.userService.countryName = country;
    (this.userService.isUserLogin) ? this.pageNavigate(`visa`) : this.pageNavigate(`login`);
  }

  setActive(label: string): void {
    this.activeLabel = label;
  }

  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }

  message() {
    this.toastr.success('Select a country to continue your application.', 'Start Journey');
  }

  startApplication() {
    (this.userService.isUserLogin) ? this.pageNavigate(`welcome`) : this.pageNavigate(`login`);
  }

  ngOnDestroy(): void { }

}
