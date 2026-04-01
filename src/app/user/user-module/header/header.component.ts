import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../core/user.service';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CORE_IMPORTS } from '../../../imports/core-imports';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...CORE_IMPORTS],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isUserLogin = false;
  isDataEntery = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.isUserLogin = this.userService.isUserLogin;
    this.isDataEntery = this.userService.isDataEntery;
  }

  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }

  logout() {
    this.userService.resetApplication();
    this.isUserLogin = false;
    this.isDataEntery = false;
    this.pageNavigate('');
  }
}
