import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
const _c0 = function (a1) { return ["/employees", a1]; };
const _c1 = function (a1) { return ["/employees/edit", a1]; };
function EmployeeIndexComponent_table_4_tr_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵelementStart(2, "a", 10);
    i0.ɵɵtext(3, "View");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 10);
    i0.ɵɵtext(5, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const employee_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(5, _c0, employee_r2.id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(7, _c1, employee_r2.id));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(employee_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(employee_r2.nationalIdNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(employee_r2.jobTitle);
} }
function EmployeeIndexComponent_table_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 8);
    i0.ɵɵelementStart(1, "thead");
    i0.ɵɵelementStart(2, "tr");
    i0.ɵɵelementStart(3, "th");
    i0.ɵɵtext(4, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "NationalIDNumber");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "JobTitle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "tbody");
    i0.ɵɵtemplate(12, EmployeeIndexComponent_table_4_tr_12_Template, 12, 9, "tr", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngForOf", ctx_r0.employeeList);
} }
export class EmployeeIndexComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
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
EmployeeIndexComponent.ɵfac = function EmployeeIndexComponent_Factory(t) { return new (t || EmployeeIndexComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
EmployeeIndexComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmployeeIndexComponent, selectors: [["app-employee-index"]], decls: 10, vars: 1, consts: [[1, "row"], [1, "col-md-12"], [1, "box"], [1, "box-body"], ["class", "table table-bordered table-hover", 4, "ngIf"], [1, "row", "top-buffer"], ["routerLink", "/employees/create", 1, "btn", "btn-success"], [1, "glyphicon", "glyphicon-plus"], [1, "table", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-info", "btn-sm", 3, "routerLink"]], template: function EmployeeIndexComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, EmployeeIndexComponent_table_4_Template, 13, 1, "table", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "div", 1);
        i0.ɵɵelementStart(7, "a", 6);
        i0.ɵɵelement(8, "i", 7);
        i0.ɵɵtext(9, "Add Employee");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.employeeList && ctx.employeeList.length);
    } }, directives: [i2.NgIf, i1.RouterLinkWithHref, i2.NgForOf], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmployeeIndexComponent, [{
        type: Component,
        args: [{
                selector: 'app-employee-index',
                template: `
    <div class="row">
        <div class="col-md-12">
            <div class="box">
                <div class="box-body">
                    <table class="table table-bordered table-hover" *ngIf="employeeList && employeeList.length">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Name</th>
                                <th>NationalIDNumber</th>
                                <th>JobTitle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr *ngFor="let employee of employeeList">
                                <td>
                                    <a class="btn btn-info btn-sm" [routerLink]="['/employees', employee.id]">View</a>
                                    <a class="btn btn-info btn-sm" [routerLink]="['/employees/edit', employee.id]">Edit</a>
                                </td>
                                <td>{{ employee.name }}</td>
                                <td>{{ employee.nationalIdNumber }}</td>
                                <td>{{ employee.jobTitle }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="row top-buffer">
        <div class="col-md-12">
            <a routerLink="/employees/create" class="btn btn-success"><i class="glyphicon glyphicon-plus"></i>Add Employee</a>
        </div>
    </div>
  `,
                styles: [`

  `],
                encapsulation: ViewEncapsulation.Emulated
            }]
    }], function () { return [{ type: i1.Router }]; }, null); })();
