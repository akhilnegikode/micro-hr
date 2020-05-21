import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class EmployeeDetailComponent implements OnInit {
    private route;
    private router;
    private formBuilder;
    pageTitle: string;
    employeeForm: FormGroup;
    employee: any;
    constructor(route: ActivatedRoute, router: Router, formBuilder: FormBuilder);
    ngOnInit(): void;
    getEmployee(id: number): void;
    onBack(): void;
    static ɵfac: i0.ɵɵFactoryDef<EmployeeDetailComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EmployeeDetailComponent, "app-employee-detail", never, {}, {}, never, never>;
}
