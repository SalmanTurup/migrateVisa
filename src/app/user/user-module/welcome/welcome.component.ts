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
  @ViewChild(MatSort)
    sort!: MatSort;
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
  visaTableData : any;
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
    this.apiService.getData('visa/get-all-visa').subscribe({
      next: (response) => {
        this.visaTableData = response?.data;
        this.visaTableData = new MatTableDataSource(this.visaTableData);
        this.visaTableData.sort = this.sort;
        this.visaTableData.paginator = this.paginator;
      },
      error: (err) => this.toastr.error('Error:', err),
    });
  }

  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }

  setActive(label: string): void {
    this.activeLabel = label;
  }

}