import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  isMobile: any;
  buttonLabels: string[] = [
    'Popular',
    'Visa in week',
    'Easy Visa',
    'Schengen Visa',
    'Visa Free'
  ];

  countryData: any = [
    {
      sImage: "assets/images/Vietnam.png",
      sCountryName: "Vietnam",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['Popular', 'Visa in week', 'Schengen Visa']
    },
    {
      sImage: "assets/images/UAE.png",
      sCountryName: "UAE",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['Popular', 'Easy Visa', 'Schengen Visa']
    },
    {
      sImage: "assets/images/Egypt.png",
      sCountryName: "Egypt",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['Popular', 'Visa in week', 'Schengen Visa']
    },
    {
      sImage: "assets/images/Indonesia.png",
      sCountryName: "Indonesia",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['Popular']
    },
    {
      sImage: "assets/images/China.png",
      sCountryName: "China",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['Popular', 'Visa in week', 'Easy Visa']
    },
    {
      sImage: "assets/images/Oman.png",
      sCountryName: "Oman",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['Popular', 'Visa Free']
    },
    {
      sImage: "assets/images/Azerbaijan.png",
      sCountryName: "Azerbaijan",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['Popular', 'Easy Visa', 'Schengen Visa']
    },
    {
      sImage: "assets/images/Cambodia.png",
      sCountryName: "Cambodia",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['Popular', 'Easy Visa', 'Visa Free']
    }
  ]
  activeLabel: string = 'Popular';
  constructor(
    // private toastr: ToastrService,
  ) { }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  }

  setActive(label: string): void {
    this.activeLabel = label;
  }

  ngOnDestroy(): void { }

}
