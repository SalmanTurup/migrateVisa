import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  public selectedRoutingValue: any;
  public countryName : any;

  ngOnInit() {}

  resetApplication() {
    this.selectedRoutingValue = undefined;
  }

  constructor() { }
}
