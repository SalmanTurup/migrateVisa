import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(private viewportScroller: ViewportScroller) { }
  contactForm = {
    email: '',
    phone: '',
    address: '',
    message: ''
  };

  e_mail = "info@example.com"

  // buttonLabels: string[] = [
  //   'Asia',
  //   'Europe',
  //   'North America',
  //   'Australia',
  // ];

  // activeLabel: string = 'Asia';
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  ngOnDestroy(): void { }
}
