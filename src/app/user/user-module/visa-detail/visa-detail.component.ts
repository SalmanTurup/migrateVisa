import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { UserService } from '../../../core/user.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visa-detail',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './visa-detail.component.html',
  styleUrl: './visa-detail.component.scss'
})
export class VisaDetailComponent {
  date: any;
  isUserLogin = false;
  countryName: any;

  constructor(
    private userService: UserService,
    private viewportScroller: ViewportScroller,
    private router: Router) {

  }
  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.countryName = this.userService.countryName;
    this.isUserLogin = this.userService.isUserLogin;
    this.processingTime();
  }
  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }

  processingTime() {
    const date = new Date(); // today's date
    const targetDate = new Date(date);
    this.date = targetDate.setDate(date.getDate() + 4);
  }

  startApplication() {
    (this.isUserLogin) ? this.pageNavigate('userDetails') : this.pageNavigate('login');
  }
}