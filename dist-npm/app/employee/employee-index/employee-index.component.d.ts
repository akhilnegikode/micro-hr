import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class EmployeeIndexComponent implements OnInit {
    private router;
    employeeList: any[];
    constructor(router: Router);
    ngOnInit(): void;
    employeeView(url: any, id: any): void;
    employeeEdit(url: any, id: any): void;
    static ɵfac: i0.ɵɵFactoryDef<EmployeeIndexComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EmployeeIndexComponent, "app-employee-index", never, {}, {}, never, never>;
}
