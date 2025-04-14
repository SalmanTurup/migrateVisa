import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-visa-detail',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './visa-detail.component.html',
  styleUrl: './visa-detail.component.scss'
})
export class VisaDetailComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnInit() { }
  ngOnDestroy(): void { }
}
