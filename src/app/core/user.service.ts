import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  public selectedRoutingValue: any;
  public countryName : any;
  public isUserLogin = false;

  ngOnInit() {}

  resetApplication() {
    this.isUserLogin = false;
    this.selectedRoutingValue = undefined;
  }

  constructor() { }

  ngOnDestroy(): void {
    this.resetApplication();
  }
}
