import { Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [SharedModule, MatSortModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  tab = 'visa';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  _formBuilder = inject(FormBuilder);


  @ViewChild(MatSort)
  sort!: MatSort;

  private _liveAnnouncer = inject(LiveAnnouncer);


  visaTableColumn: string[] = ['Name', 'Email', 'Phone', 'DepartureDate', 'VisaType', 'Status', 'Action', 'ViewApplication'];
  contactTableColumn: string[] = ["Email", "Phone", "Address", "Message", 'Status', 'Action'];

  visaTableData = new MatTableDataSource(ELEMENT_DATA);

  contactTableData = new MatTableDataSource(CONTACT);
  userDetailsFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    sex: ['', Validators.required],
    birthDate: ['', Validators.required],
    placeOfBirth: ['', Validators.required],
    passportNumber: ['', [Validators.required, Validators.pattern('^[A-Z0-9]{8,10}$')]],
    passportIssueDate: ['', Validators.required],
    passportExpiryDate: ['', Validators.required],
    passportIssuePlace: ['', Validators.required],
    tentativeDepartureDate: ['', Validators.required],
    tentativeReturnDate: ['', Validators.required],
    currentAddressLine1: ['', Validators.required],
    currentAddressLine2: ['', Validators.required],
    pincode: ['', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]],
    state: ['', Validators.required],
    city: ['', Validators.required],
    mobileNumber: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]],
    email: ['', [Validators.required, Validators.email]]
  });
  constructor(private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.patchValue();
    }


  pageNavigate(path: string) {
    this.router.navigate([`/${path}`]);
  }

  ngAfterViewInit() {
    this.visaTableData.sort = this.sort;
    this.visaTableData.paginator = this.paginator;

    this.contactTableData.sort = this.sort;
    this.contactTableData.paginator = this.paginator;
  }

  openDialog(content: any): void {
    const dialogRef = this.dialog.open(content);

    dialogRef.afterClosed();
  }

  switchTab(tabName: string) {
    this.tab = tabName;
    setTimeout(() => {
      if (tabName === 'visa') {
        this.visaTableData.paginator = this.paginator;
        this.visaTableData.sort = this.sort;
      } else if (tabName === 'contact') {
        this.contactTableData.paginator = this.paginator;
        this.contactTableData.sort = this.sort;
      }
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  patchValue(){
    this.userDetailsFormGroup.patchValue({
      tentativeDepartureDate: '2025-06-01',
      tentativeReturnDate: '2025-06-15',
      passportNumber: 'A1234567',
      passportIssueDate: '2020-01-01',
      passportExpiryDate: '2030-01-01',
      passportIssuePlace: 'Mumbai',
      firstName: 'Salman',
      lastName: 'Turup',
      birthDate: '1990-05-20',
      placeOfBirth: 'Mumbai',
      sex: 'Male',
      pincode: '400001',
      city: 'Mumbai',
      state: 'Maharashtra',
      currentAddressLine1: '123 Marine Drive',
      currentAddressLine2: 'Near Gateway',
      mobileNumber: '9876543210',
      email: 'salman@example.com'
    });
  }
}

const ELEMENT_DATA = [
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Single', Status: 'Pending' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Single', Status: 'Done' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Multiple', Status: 'Pending' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Single', Status: 'Done' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Multiple', Status: 'Pending' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Single', Status: 'Done' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Single', Status: 'Pending' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Multiple', Status: 'Done' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Single', Status: 'Pending' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Single', Status: 'Done' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Multiple', Status: 'Pending' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Single', Status: 'Done' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Multiple', Status: 'Pending' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Single', Status: 'Done' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Single', Status: 'Pending' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Multiple', Status: 'Pending' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Single', Status: 'Pending' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Single', Status: 'Done' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Single', Status: 'Pending' },
  { Name: "salman j Turup", Email: 'salmanjt@lentra.ai', Phone: '98763829833', DepartureDate: '10/12/25', VisaType: 'Single', Status: 'Done' }

];

const CONTACT = [
  { Email: "salman.turup@gamil.com", Phone: "83987478388", Address: "solapur", Message: "helloo admin", Status: "Done" },
  { Email: "salman.turup@gamil.com", Phone: "83987478388", Address: "solapur", Message: "helloo admin", Status: "Pending" },
  { Email: "salman.turup@gamil.com", Phone: "83987478388", Address: "solapur", Message: "helloo admin", Status: "Done" },
  { Email: "salman.turup@gamil.com", Phone: "83987478388", Address: "solapur", Message: "helloo admin", Status: "Pending" },
  { Email: "salman.turup@gamil.com", Phone: "83987478388", Address: "solapur", Message: "helloo admin", Status: "Done" },
  { Email: "salman.turup@gamil.com", Phone: "83987478388", Address: "solapur", Message: "helloo admin", Status: "Pending" },
  { Email: "salman.turup@gamil.com", Phone: "83987478388", Address: "solapur", Message: "helloo admin", Status: "Done" },
  { Email: "salman.turup@gamil.com", Phone: "83987478388", Address: "solapur", Message: "helloo admin", Status: "Pending" },
  { Email: "salman.turup@gamil.com", Phone: "83987478388", Address: "solapur", Message: "helloo admin", Status: "Done" },
  { Email: "salman.turup@gamil.com", Phone: "83987478388", Address: "solapur", Message: "helloo admin", Status: "Pending" },
  { Email: "salman.turup@gamil.com", Phone: "83987478388", Address: "solapur", Message: "helloo admin", Status: "Done" },
  { Email: "salman.turup@gamil.com", Phone: "83987478388", Address: "solapur", Message: "helloo admin", Status: "Pending" },
  { Email: "salman.turup@gamil.com", Phone: "83987478388", Address: "solapur", Message: "helloo admin", Status: "Done" },
  { Email: "salman.turup@gamil.com", Phone: "83987478388", Address: "solapur", Message: "helloo admin", Status: "Pending" }

]