import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
export class EmployeeDetailComponent {
    constructor(route, router, formBuilder) {
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.pageTitle = 'Employee Detail';
    }
    ngOnInit() {
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
        this.route.params.subscribe(params => {
            const id = +params['id'];
            this.getEmployee(id);
        });
    }
    getEmployee(id) {
        this.employee = {
            "firstName": "Ken",
            "lastName": "Sánchez",
            "jobTitle": "Tool Designer"
        };
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
    onBack() {
        this.router.navigate(['/employees']);
    }
}
EmployeeDetailComponent.ɵfac = function EmployeeDetailComponent_Factory(t) { return new (t || EmployeeDetailComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.FormBuilder)); };
EmployeeDetailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmployeeDetailComponent, selectors: [["app-employee-detail"]], decls: 51, vars: 4, consts: [[1, "page-header"], [3, "formGroup"], [1, "row", "form-group"], ["for", "nationalIdNumber", 1, "col-sm-1", "col-form-label"], [1, "col-md-3"], ["id", "nationalIdNumber", "formControlName", "nationalIdNumber", "type", "text", "readonly", "true", 1, "form-control"], ["for", "loginId", 1, "col-sm-1", "col-form-label"], ["id", "loginId", "type", "text", "formControlName", "loginId", "placeholder", "e.g. adventure-works\\loginName", "readonly", "true", 1, "form-control"], ["for", "birthDate", 1, "col-sm-1", "col-form-label"], ["id", "birthDate", "type", "text", "formControlName", "birthDate", "placeholder", "e.g. 2003-01-07", "readonly", "true", 1, "form-control"], ["for", "hireDate", 1, "col-sm-1", "col-form-label"], ["id", "hireDate", "type", "text", "formControlName", "hireDate", "placeholder", "e.g. 2003-01-07", "readonly", "true", 1, "form-control"], ["for", "vacationHours", 1, "col-sm-1", "col-form-label"], ["id", "vacationHours", "type", "text", "formControlName", "vacationHours", "placeholder", "e.g. 5", "readonly", "true", 1, "form-control"], ["for", "sickLeaveHours", 1, "col-sm-1", "col-form-label"], ["id", "sickLeaveHours", "type", "text", "formControlName", "sickLeaveHours", "placeholder", "e.g. 5", "readonly", "true", 1, "form-control"], ["for", "gender", 1, "col-sm-1", "col-form-label"], ["id", "gender", "type", "text", "readonly", "true", "formControlName", "gender", 1, "form-control"], ["for", "maritalStatus", 1, "col-sm-1", "col-form-label"], ["id", "maritalStatus", "type", "text", "readonly", "true", "formControlName", "maritalStatus", 1, "form-control"], ["type", "checkbox", "id", "salariedFlag", "readonly", "true", 1, "form-check-input"], ["type", "button", 1, "btn", "btn-secondary", "mb-2", 3, "click"]], template: function EmployeeDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelementStart(2, "h3");
        i0.ɵɵtext(3);
        i0.ɵɵelementStart(4, "small");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div");
        i0.ɵɵelementStart(7, "form", 1);
        i0.ɵɵelementStart(8, "div", 2);
        i0.ɵɵelementStart(9, "label", 3);
        i0.ɵɵtext(10, "NationalIdNumber");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 4);
        i0.ɵɵelement(12, "input", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "label", 6);
        i0.ɵɵtext(14, "LoginId");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 4);
        i0.ɵɵelement(16, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 2);
        i0.ɵɵelementStart(18, "label", 8);
        i0.ɵɵtext(19, "Birth Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 4);
        i0.ɵɵelement(21, "input", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "label", 10);
        i0.ɵɵtext(23, "Hire Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "div", 4);
        i0.ɵɵelement(25, "input", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "div", 2);
        i0.ɵɵelementStart(27, "label", 12);
        i0.ɵɵtext(28, "Vacation Hours");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "div", 4);
        i0.ɵɵelement(30, "input", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "label", 14);
        i0.ɵɵtext(32, "Sick Leave Hours");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div", 4);
        i0.ɵɵelement(34, "input", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "div", 2);
        i0.ɵɵelementStart(36, "label", 16);
        i0.ɵɵtext(37, "Gender");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "div", 4);
        i0.ɵɵelement(39, "input", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "label", 18);
        i0.ɵɵtext(41, "Marital Status");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "div", 4);
        i0.ɵɵelement(43, "input", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "div", 2);
        i0.ɵɵelementStart(45, "div", 4);
        i0.ɵɵelement(46, "input", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "div", 2);
        i0.ɵɵelementStart(48, "div", 4);
        i0.ɵɵelementStart(49, "button", 21);
        i0.ɵɵlistener("click", function EmployeeDetailComponent_Template_button_click_49_listener() { return ctx.onBack(); });
        i0.ɵɵtext(50, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2("", ctx.employee.firstName, " ", ctx.employee.lastName, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.employee.jobTitle);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formGroup", ctx.employeeForm);
    } }, directives: [i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlName], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmployeeDetailComponent, [{
        type: Component,
        args: [{
                selector: 'app-employee-detail',
                template: `
      <div>
          <div class="page-header">
              <h3>{{employee.firstName}} {{employee.lastName}} <small>{{employee.jobTitle}}</small></h3>
          </div>
          <div>
              <form [formGroup]="employeeForm">
                  <div class="row form-group">
                      <label for="nationalIdNumber" class="col-sm-1 col-form-label">NationalIdNumber</label>
                      <div class="col-md-3">
                          <input id="nationalIdNumber" formControlName="nationalIdNumber" class="form-control" type="text" readonly="true">
                      </div>
                      <label for="loginId" class="col-sm-1 col-form-label">LoginId</label>
                      <div class="col-md-3">
                          <input id="loginId" class="form-control" type="text" formControlName="loginId"
                              placeholder="e.g. adventure-works\\loginName" readonly="true">
                      </div>
                  </div>
                  <div class="row form-group">
                      <label for="birthDate" class="col-sm-1 col-form-label">Birth Date</label>
                      <div class="col-md-3">
                          <input id="birthDate" class="form-control" type="text" formControlName="birthDate"
                              placeholder="e.g. 2003-01-07" readonly="true">
                      </div>
                      <label for="hireDate" class="col-sm-1 col-form-label">Hire Date</label>
                      <div class="col-md-3">
                          <input id="hireDate" class="form-control" type="text" formControlName="hireDate"
                              placeholder="e.g. 2003-01-07" readonly="true">
                      </div>
                  </div>

                  <div class="row form-group">
                      <label for="vacationHours" class="col-sm-1 col-form-label">Vacation Hours</label>
                      <div class="col-md-3">
                          <input id="vacationHours" class="form-control" type="text" formControlName="vacationHours"
                              placeholder="e.g. 5" readonly="true">
                      </div>
                      <label for="sickLeaveHours" class="col-sm-1 col-form-label">Sick Leave Hours</label>
                      <div class="col-md-3">
                          <input id="sickLeaveHours" class="form-control" type="text" formControlName="sickLeaveHours"
                              placeholder="e.g. 5" readonly="true">
                      </div>
                  </div>
                  <div class="row form-group">
                      <label for="gender" class="col-sm-1 col-form-label">Gender</label>
                      <div class="col-md-3">
                          <input id="gender" class="form-control" type="text" readonly="true" formControlName="gender">
                      </div>
                      <label for="maritalStatus" class="col-sm-1 col-form-label">Marital Status</label>
                      <div class="col-md-3">
                          <input id="maritalStatus" class="form-control" type="text" readonly="true" formControlName="maritalStatus">
                      </div>
                  </div>
                  <div class="row form-group">
                      <div class="col-md-3">
                          <input class="form-check-input" type="checkbox" id="salariedFlag" readonly="true">
                      </div>
                  </div>
              </form>
          </div>
      </div>

      <div class="row form-group">
          <div class="col-md-3">
              <button type="button" class="btn btn-secondary mb-2" (click)="onBack()">Back</button>
          </div>
      </div>
    `,
                encapsulation: ViewEncapsulation.Emulated
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.FormBuilder }]; }, null); })();
