import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../core/user.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }
  ngOnInit() { }

  selectRoute(path: any) {
    this.userService.selectedRoutingValue = path;
    console.log(this.userService.selectedRoutingValue, "footer");
    setTimeout(() => {
      this.pageNavigate('content');
    });
  }

  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }
  ngOnDestroy(): void { }
}
