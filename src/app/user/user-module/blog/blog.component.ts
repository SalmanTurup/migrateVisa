import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit, OnDestroy {
  constructor() { }
  ngOnInit() { }
  ngOnDestroy(): void { }
}
