import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../../core/user.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visa-detail',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './visa-detail.component.html',
  styleUrl: './visa-detail.component.scss'
})
export class VisaDetailComponent implements AfterViewInit {
  date = new Date();
  countryName: any;
  displayedColumns: string[] = ["No", 'Entery', 'Visa Types', 'Stay duration', 'Visa validity', 'Processing time', 'Prince', 'Status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private userService: UserService, private viewportScroller: ViewportScroller,private router: Router) {

  }
  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.countryName = this.userService.countryName;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }
}


export interface PeriodicElement {
  No: string;
  Entery: string;
  VisaTypes: string;
  Stayduration: number;
  VisaValidity: string;
  ProcessingTime: string;
  Prince: string;
  Status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

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