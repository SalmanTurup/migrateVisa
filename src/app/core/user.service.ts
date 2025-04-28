import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  public selectedRoutingValue: any;
  public countryName: any;
  public isUserLogin = false;
  private baseUrl = environment.apiUrl;
  public countryData: any = [
    {
      sImage: "assets/images/Vietnam.png",
      sCountryName: "Vietnam",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Visa in week','Schengen Visa']
    },
    {
      sImage: "assets/images/UAE.png",
      sCountryName: "UAE",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Popular','Easy Visa']
    },
    {
      sImage: "assets/images/Egypt.png",
      sCountryName: "Egypt",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Popular','Schengen Visa']
    },
    {
      sImage: "assets/images/Indonesia.png",
      sCountryName: "Indonesia",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Visa in week','Easy Visa','Visa Free']
    },
    {
      sImage: "assets/images/China.png",
      sCountryName: "China",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Popular','Visa in week','Visa Free']
    },
    {
      sImage: "assets/images/Oman.png",
      sCountryName: "Oman",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Visa in week','Easy Visa']
    },
    {
      sImage: "assets/images/Switzerland.png",
      sCountryName: "Switzerland",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Popular','Schengen Visa','Visa Free']
    },
    {
      sImage: "assets/images/Turkiye.png",
      sCountryName: "Turkiye",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Visa in week']
    },
    {
      sImage: "assets/images/Canada.png",
      sCountryName: "Canada",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Popular','Easy Visa','Schengen Visa']
    },
    {
      sImage: "assets/images/Germany.png",
      sCountryName: "Germany",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998,'Visa in week'",
      aFilter: ['All','Schengen Visa','Visa Free']
    },
    {
      sImage: "assets/images/Japan.png",
      sCountryName: "Japan",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Popular','Visa Free']
    },
    {
      sImage: "assets/images/UnitedStates.png",
      sCountryName: "United States",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Easy Visa','Schengen Visa']
    },
    {
      sImage: "assets/images/Italy.png",
      sCountryName: "Italy",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Visa in week','Visa Free']
    },
    {
      sImage: "assets/images/Thailand.png",
      sCountryName: "Thailand",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Popular','Easy Visa','Schengen Visa']
    },
    {
      sImage: "assets/images/France.png",
      sCountryName: "France",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Visa in week']
    },
    {
      sImage: "assets/images/Maldives.png",
      sCountryName: "Maldives",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Popular','Easy Visa']
    },
    {
      sImage: "assets/images/Mexico.png",
      sCountryName: "Mexico",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Visa in week','Schengen Visa']
    },
    {
      sImage: "assets/images/Turkey.png",
      sCountryName: "Turkey",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Visa in week','Visa Free']
    },
    {
      sImage: "assets/images/Spain.png",
      sCountryName: "Spain",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Easy Visa']
    },
    {
      sImage: "assets/images/Austria.png",
      sCountryName: "Austria",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['All','Visa in week','Schengen Visa']
    }
  ]



  ngOnInit() { }

  resetApplication() {
    this.isUserLogin = false;
    this.selectedRoutingValue = undefined;
  }

  constructor() { }
  
  ngOnDestroy(): void {
    this.resetApplication();
  }
}
