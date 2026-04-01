import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ViewportScroller } from '@angular/common';
import { CORE_IMPORTS } from '../../../imports/core-imports';
import { MATERIAL_IMPORTS } from '../../../imports/material-imports';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit, OnDestroy {

  constructor(
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  ngOnDestroy(): void { }
}
