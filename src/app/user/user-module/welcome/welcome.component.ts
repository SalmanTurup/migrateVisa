import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ViewportScroller } from '@angular/common';
import { UserService } from '../../../core/user.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../../../core/api.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  visatable:any
  isMobile = false;
  activeLabel: string = 'All';
  buttonLabels: string[] = [
    'All',
    'Popular',
    'Visa in week',
    'Easy Visa',
    'Schengen Visa',
    'Visa Free'
  ];
  isLoading = false;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ["No", 'Entery', 'Visa Types', 'Stay duration', 'Visa validity', 'Processing time', 'Prince', 'Status'];
  
  constructor(
    private viewportScroller: ViewportScroller,
    private userService: UserService,
    private router: Router,
    public apiService: ApiService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
    this.countryData = this.userService.countryData;
    this.getAllVisaRequest();
  }

  setCountry(country: any) {
    this.userService.countryName = country;
    (this.userService.isUserLogin) ? this.pageNavigate(`visa`) : this.pageNavigate(`login`);
  }

  getAllVisaRequest() {
    this.isLoading = true;
    this.apiService.getData(`visa/get-user-visa-details?id=${this.userService?.loginUserEmail}`).subscribe({
      next: (response) => {
        if (response?.errorMessage) {
          this.snackBarNotification(response?.errorMessage);
        } else {
          this.visatable = this.visaTableData = response?.data?.VisaApplication;
          this.visaTableData = new MatTableDataSource(this.visaTableData);
          this.visaTableData.sort = this.sort;
          this.visaTableData.paginator = this.paginator;
          this.snackBarNotification(response?.message);
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        if(err?.errorMessage){
          this.snackBarNotification(err?.errorMessage);
        } else if(err?.error){
          this.snackBarNotification(err?.error?.errorMessage);
        }
        this.snackBarNotification('Something went wrong. Please try again.');
      }
    });
  }

  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }

  setActive(label: string): void {
    this.activeLabel = label;
  }

  snackBarNotification(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  refreshTable(){
   this.getAllVisaRequest(); 
  }
  
}