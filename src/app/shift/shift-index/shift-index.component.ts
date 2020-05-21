import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shift-index',
  templateUrl: './shift-index.component.html',
  styleUrls: ['./shift-index.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ShiftIndexComponent implements OnInit {
  shifts: any[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.shifts = [
      { id: 12345678, name: 'Ken Sánchez', startTime: '12345678', endTime: 'Tool Designer' },
      { id: 12345678, name: 'Terri Duffy', startTime: '12345678', endTime: 'Marketing Assistant' },
      { id: 12345678, name: 'Rob Walters', startTime: '12345678', endTime: 'Engineering Manager' },
      { id: 12345678, name: 'Dylan Miller', startTime: '12345678', endTime: 'Design Engineer' }
    ];
  }
}
