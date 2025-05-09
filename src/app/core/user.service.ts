import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  public selectedRoutingValue: any;
  public countryName: any;
  public isUserLogin = false;
  public loginUserEmail: any;
  public visaObject: any;
  public countryData: any = [
    {
      sImage: "assets/images/Vietnam.png",
      sCountryName: "Vietnam",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "3 Days",
      sRupees: "₹2500",
      aFilter: ['All', 'Visa in week', 'Schengen Visa']
    },
    {
      sImage: "assets/images/UAE.png",
      sCountryName: "UAE",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "2 Days",
      sRupees: "₹2999",
      aFilter: ['All', 'Popular', 'Easy Visa']
    },
    {
      sImage: "assets/images/Egypt.png",
      sCountryName: "Egypt",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "4 Days",
      sRupees: "₹3200",
      aFilter: ['All', 'Popular', 'Schengen Visa']
    },
    {
      sImage: "assets/images/Indonesia.png",
      sCountryName: "Indonesia",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "1 Day",
      sRupees: "₹1800",
      aFilter: ['All', 'Visa in week', 'Easy Visa', 'Visa Free']
    },
    {
      sImage: "assets/images/China.png",
      sCountryName: "China",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹4500",
      aFilter: ['All', 'Popular', 'Visa in week', 'Visa Free']
    },
    {
      sImage: "assets/images/Oman.png",
      sCountryName: "Oman",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "3 Days",
      sRupees: "₹2800",
      aFilter: ['All', 'Visa in week', 'Easy Visa']
    },
    {
      sImage: "assets/images/Switzerland.png",
      sCountryName: "Switzerland",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "15 Days",
      sRupees: "₹7000",
      aFilter: ['All', 'Popular', 'Schengen Visa', 'Visa Free']
    },
    {
      sImage: "assets/images/Turkiye.png",
      sCountryName: "Turkiye",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "5 Days",
      sRupees: "₹3500",
      aFilter: ['All', 'Visa in week']
    },
    {
      sImage: "assets/images/Canada.png",
      sCountryName: "Canada",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "20 Days",
      sRupees: "₹8500",
      aFilter: ['All', 'Popular', 'Easy Visa', 'Schengen Visa']
    },
    {
      sImage: "assets/images/Germany.png",
      sCountryName: "Germany",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "10 Days",
      sRupees: "₹6000",
      aFilter: ['All', 'Schengen Visa', 'Visa Free']
    },
    {
      sImage: "assets/images/Japan.png",
      sCountryName: "Japan",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹5500",
      aFilter: ['All', 'Popular', 'Visa Free']
    },
    {
      sImage: "assets/images/UnitedStates.png",
      sCountryName: "United States",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "20 Days",
      sRupees: "₹9500",
      aFilter: ['All', 'Easy Visa', 'Schengen Visa']
    },
    {
      sImage: "assets/images/Italy.png",
      sCountryName: "Italy",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "12 Days",
      sRupees: "₹6500",
      aFilter: ['All', 'Visa in week', 'Visa Free']
    },
    {
      sImage: "assets/images/Thailand.png",
      sCountryName: "Thailand",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "2 Days",
      sRupees: "₹2200",
      aFilter: ['All', 'Popular', 'Easy Visa', 'Schengen Visa']
    },
    {
      sImage: "assets/images/France.png",
      sCountryName: "France",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "10 Days",
      sRupees: "₹6700",
      aFilter: ['All', 'Visa in week']
    },
    {
      sImage: "assets/images/Maldives.png",
      sCountryName: "Maldives",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "1 Day",
      sRupees: "₹2000",
      aFilter: ['All', 'Popular', 'Easy Visa']
    },
    {
      sImage: "assets/images/Mexico.png",
      sCountryName: "Mexico",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "6 Days",
      sRupees: "₹5000",
      aFilter: ['All', 'Visa in week', 'Schengen Visa']
    },
    {
      sImage: "assets/images/Turkey.png",
      sCountryName: "Turkey",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "5 Days",
      sRupees: "₹3500",
      aFilter: ['All', 'Visa in week', 'Visa Free']
    },
    {
      sImage: "assets/images/Spain.png",
      sCountryName: "Spain",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "12 Days",
      sRupees: "₹6200",
      aFilter: ['All', 'Easy Visa']
    },
    {
      sImage: "assets/images/Austria.png",
      sCountryName: "Austria",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "10 Days",
      sRupees: "₹6100",
      aFilter: ['All', 'Visa in week', 'Schengen Visa']
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  resetApplication() {
    this.isUserLogin = false;
    this.selectedRoutingValue = undefined;
    this.loginUserEmail = undefined;
    this.countryName = undefined;
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.resetApplication();
  }
}
