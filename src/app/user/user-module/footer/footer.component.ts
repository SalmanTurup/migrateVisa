import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  constructor() { }
  ngOnInit() { }
  ngOnDestroy(): void { }
}
