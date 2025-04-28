import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ViewportScroller } from '@angular/common';
import { UserService } from '../../../core/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  countryData: any;
  activeLabel: string = 'All';
  buttonLabels: string[] = [
    'All',
    'Popular',
    'Visa in week',
    'Easy Visa',
    'Schengen Visa',
    'Visa Free'
  ];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns: string[] = ["No", 'Entery', 'Visa Types', 'Stay duration', 'Visa validity', 'Processing time', 'Prince', 'Status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(
    private viewportScroller: ViewportScroller,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.countryData = this.userService.countryData;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  setCountry(country: any) {
    this.userService.countryName = country;
    (this.userService.isUserLogin) ? this.pageNavigate(`visa`) : this.pageNavigate(`login`);
  }


  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }

  setActive(label: string): void {
    this.activeLabel = label;
  }

}

export const ELEMENT_DATA = [

  {
    No: "1",
    Entery: 'Multiple Entry',
    VisaTypes: 'eVisa',
    Stayduration: 1.0079,
    VisaValidity: '3 months',
    ProcessingTime: '2 days',
    Prince: '$55.04',
    Status: 'Active'
  },
  {
    No: "2",
    Entery: 'Single Entry',
    VisaTypes: 'eVisa',
    Stayduration: 4.0026,
    VisaValidity: '6 months',
    ProcessingTime: '3 days',
    Prince: '$70.01',
    Status: 'Pending'
  },
  {
    No: "3",
    Entery: 'Single Entry',
    VisaTypes: 'eVisa',
    Stayduration: 6.941,
    VisaValidity: '9 months',
    ProcessingTime: '4 days',
    Prince: '$84.71',
    Status: 'Rejected'
  },
  {
    No: "4",
    Entery: 'Multiple Entry',
    VisaTypes: 'eVisa',
    Stayduration: 9.0122,
    VisaValidity: '12 months',
    ProcessingTime: '5 days',
    Prince: '$95.06',
    Status: 'Active'
  },
  {
    No: "5",
    Entery: 'Single Entry',
    VisaTypes: 'eVisa',
    Stayduration: 10.811,
    VisaValidity: '15 months',
    ProcessingTime: '2 days',
    Prince: '$104.06',
    Status: 'Pending'
  }, {
    No: "6",
    Entery: 'Multiple Entry',
    VisaTypes: 'eVisa',
    Stayduration: 1.0079,
    VisaValidity: '3 months',
    ProcessingTime: '2 days',
    Prince: '$55.04',
    Status: 'Active'
  },
  {
    No: "7",
    Entery: 'Single Entry',
    VisaTypes: 'eVisa',
    Stayduration: 4.0026,
    VisaValidity: '6 months',
    ProcessingTime: '3 days',
    Prince: '$70.01',
    Status: 'Pending'
  },
  {
    No: "8",
    Entery: 'Multiple Entry',
    VisaTypes: 'eVisa',
    Stayduration: 6.941,
    VisaValidity: '9 months',
    ProcessingTime: '4 days',
    Prince: '$84.71',
    Status: 'Rejected'
  },
  {
    No: "9",
    Entery: 'Single Entry',
    VisaTypes: 'eVisa',
    Stayduration: 9.0122,
    VisaValidity: '12 months',
    ProcessingTime: '5 days',
    Prince: '$95.06',
    Status: 'Active'
  },
  {
    No: "10",
    Entery: 'Multiple Entry',
    VisaTypes: 'eVisa',
    Stayduration: 10.811,
    VisaValidity: '15 months',
    ProcessingTime: '2 days',
    Prince: '$104.06',
    Status: 'Pending'
  }
];