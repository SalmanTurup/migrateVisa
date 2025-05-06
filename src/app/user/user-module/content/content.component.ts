import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { UserService } from '../../../core/user.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit, OnDestroy {

  selected = 'Privacy';

  constructor(
    private userService: UserService,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
    if (this.userService.selectedRoutingValue !== undefined) {
      this.selected = this.userService.selectedRoutingValue;
    }
  }

  ngOnDestroy(): void {
    this.userService.resetApplication();
  }
}
