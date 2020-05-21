import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-employee-edit',
    templateUrl: './employee-edit.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class EmployeeEditComponent implements OnInit {
    pageTitle = 'Employee Edit';
    employeeForm: FormGroup;
    employee: any;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
    ) {
    }

    ngOnInit(): void {

        this.employeeForm = this.formBuilder.group({
            nationalIdNumber: '',
            loginId: '',
            birthDate: '',
            maritalStatus: '',
            gender: '',
            hireDate: '',
            salariedFlag: '',
            vacationHours: '',
            sickLeaveHours: ''
        });
        this.route.params.subscribe(
            params => {
                const id = +params['id'];
                this.getEmployee(id);
            });
    }

    getEmployee(id: number) {
        this.employee = {
            "firstName":"Ken",
            "lastName": "Sánchez",
            "jobTitle": "Tool Designer"
        }
        this.employeeForm.patchValue({
            nationalIdNumber: 12345678,
            loginId: 'adventure-works/ken',
            birthDate: '1980-12-06',
            maritalStatus: 'Married',
            gender: "Male",
            hireDate: "2020-03-06",
            salariedFlag: Boolean(true),
            vacationHours: 23,
            sickLeaveHours: 10
        });
    }

    onBack(): void {
        this.router.navigate(['/employees']);
    }
}
