import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy {
  contactForm = {
    email: '',
    phone: '',
    address: '',
    message: ''
  };

  constructor(private viewportScroller: ViewportScroller) { }
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  ngOnDestroy(): void { }

}
