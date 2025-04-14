import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm = {
    email: '',
    phone: '',
    address: '',
    message: ''
  };

  e_mail = "info@example.com"

  buttonLabels: string[] = [
    'Asia',
    'Europe',
    'North America',
    'Australia',
  ];

  activeLabel: string = 'Asia';
  
  constructor() { }
  ngOnInit() { }
  ngOnDestroy(): void { }
}
