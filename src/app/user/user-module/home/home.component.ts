import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ViewportScroller } from '@angular/common';
import { UserService } from '../../../core/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
      sImage: "assets/images/Switzerland.png",
      sCountryName: "Switzerland",
      sType: "Visa Type",
      sTitleOne: "Per Person",
      sTitleTwo: "Get Visa in",
      sDays: "7 Days",
      sRupees: "₹3998",
      aFilter: ['Popular', 'Easy Visa', 'Schengen Visa']
    },
    {
      sImage: "assets/images/Turkiye.png",
      sCountryName: "Turkiye",
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
    private viewportScroller: ViewportScroller,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  }

  setCountry(country: any) {
    this.userService.countryName = country;
    (this.userService.isUserLogin) ? this.pageNavigate(`visa`) : this.pageNavigate(`login`);
  }
  setActive(label: string): void {
    this.activeLabel = label;
  }

  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }

  message() {
    this.toastr.success('Select a country to continue your application.', 'Start Journey');
  }

  ngOnDestroy(): void { }

}
