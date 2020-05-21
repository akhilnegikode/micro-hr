import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-index',
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EmployeeIndexComponent implements OnInit {
  employeeList: any[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.employeeList = [
      { id: 12345678, name: 'Ken Sánchez', nationalIdNumber: '12345678', jobTitle: 'Tool Designer' },
      { id: 12345678, name: 'Terri Duffy', nationalIdNumber: '12345678', jobTitle: 'Marketing Assistant' },
      { id: 12345678, name: 'Rob Walters', nationalIdNumber: '12345678', jobTitle: 'Engineering Manager' },
      { id: 12345678, name: 'Dylan Miller', nationalIdNumber: '12345678', jobTitle: 'Design Engineer 	' }
    ];
  }

  employeeView(url, id) {
    this.router.navigate([url, id]);
  }

  employeeEdit(url, id) {
    this.router.navigate([url, id]);
  }
}
