import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../core/user.service';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isUserLogin = false;
  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }
  ngOnInit(): void {
    this.isUserLogin = this.userService.isUserLogin;
  }

  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }

}
