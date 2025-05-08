import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ViewportScroller } from '@angular/common';
import { UserService } from '../../../core/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../../../core/api.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  countryData: any;
  visaTableData: any;
  activeLabel: string = 'All';
  buttonLabels: string[] = [
    'All',
    'Popular',
    'Visa in week',
    'Easy Visa',
    'Schengen Visa',
    'Visa Free'
  ];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ["No", 'Entery', 'Visa Types', 'Stay duration', 'Visa validity', 'Processing time', 'Prince', 'Status'];
  
  constructor(
    private viewportScroller: ViewportScroller,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    public apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.countryData = this.userService.countryData;
    this.getAllVisaRequest();
  }

  setCountry(country: any) {
    this.userService.countryName = country;
    (this.userService.isUserLogin) ? this.pageNavigate(`visa`) : this.pageNavigate(`login`);
  }

  getAllVisaRequest() {
    this.userService.loginUserEmail = "john.doe@example.com";
    this.apiService.getData(`visa/get-user-visa-details?id=${this.userService.loginUserEmail}`).subscribe({
      next: (response) => {
        this.visaTableData = response?.data?.VisaApplication;
        this.visaTableData = new MatTableDataSource(this.visaTableData);
        this.visaTableData.sort = this.sort;
        this.visaTableData.paginator = this.paginator;
        if (response.errorMessage) {
          this.toastr.error(response.errorMessage, 'Warning!');
        } else {
          this.toastr.success(response.message, 'Success!');
        }
      },
      error: (err) => {
        this.toastr.error('Something went wrong. Please try again.', 'Warning!');
      }
    });
  }

  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }

  setActive(label: string): void {
    this.activeLabel = label;
  }
}