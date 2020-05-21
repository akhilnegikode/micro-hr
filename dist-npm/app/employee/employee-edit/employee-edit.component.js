import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
export class EmployeeEditComponent {
    constructor(route, router, formBuilder) {
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.pageTitle = 'Employee Edit';
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
EmployeeEditComponent.ɵfac = function EmployeeEditComponent_Factory(t) { return new (t || EmployeeEditComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.FormBuilder)); };
EmployeeEditComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmployeeEditComponent, selectors: [["app-employee-edit"]], decls: 49, vars: 1, consts: [[3, "formGroup", "ngSubmit"], [1, "row", "form-group"], ["for", "nationalIdNumber", 1, "col-sm-1", "col-form-label"], [1, "col-md-3"], ["id", "nationalIdNumber", "formControlName", "nationalIdNumber", "type", "text", 1, "form-control"], ["for", "loginId", 1, "col-sm-1", "col-form-label"], ["id", "loginId", "type", "text", "formControlName", "loginId", "placeholder", "e.g. adventure-works\\loginName", 1, "form-control"], ["for", "birthDate", 1, "col-sm-1", "col-form-label"], ["id", "birthDate", "type", "text", "formControlName", "birthDate", "placeholder", "e.g. 2003-01-07", 1, "form-control"], ["for", "hireDate", 1, "col-sm-1", "col-form-label"], ["id", "hireDate", "type", "text", "formControlName", "hireDate", "placeholder", "e.g. 2003-01-07", 1, "form-control"], ["for", "vacationHours", 1, "col-sm-1", "col-form-label"], ["id", "vacationHours", "type", "text", "formControlName", "vacationHours", "placeholder", "e.g. 5", 1, "form-control"], ["for", "sickLeaveHours", 1, "col-sm-1", "col-form-label"], ["id", "sickLeaveHours", "type", "text", "formControlName", "sickLeaveHours", "placeholder", "e.g. 5", 1, "form-control"], ["for", "gender", 1, "col-sm-1", "col-form-label"], ["id", "gender", "type", "text", "formControlName", "gender", 1, "form-control"], ["for", "maritalStatus", 1, "col-sm-1", "col-form-label"], ["id", "maritalStatus", "type", "text", "formControlName", "maritalStatus", 1, "form-control"], ["type", "checkbox", "id", "salariedFlag", 1, "form-check-input"], ["type", "button", 1, "btn", "btn-secondary", "mb-2", 3, "click"], [1, "col-md-3", "text-right"], ["id", "submit", "type", "Submit", 1, "btn", "btn-primary", "mb-2", 3, "click"]], template: function EmployeeEditComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div");
        i0.ɵɵelementStart(2, "form", 0);
        i0.ɵɵlistener("ngSubmit", function EmployeeEditComponent_Template_form_ngSubmit_2_listener() { return ctx.onBack(); });
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵelementStart(4, "label", 2);
        i0.ɵɵtext(5, "NationalIdNumber");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 3);
        i0.ɵɵelement(7, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "label", 5);
        i0.ɵɵtext(9, "LoginId");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 3);
        i0.ɵɵelement(11, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 1);
        i0.ɵɵelementStart(13, "label", 7);
        i0.ɵɵtext(14, "Birth Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 3);
        i0.ɵɵelement(16, "input", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "label", 9);
        i0.ɵɵtext(18, "Hire Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 3);
        i0.ɵɵelement(20, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 1);
        i0.ɵɵelementStart(22, "label", 11);
        i0.ɵɵtext(23, "Vacation Hours");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "div", 3);
        i0.ɵɵelement(25, "input", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "label", 13);
        i0.ɵɵtext(27, "Sick Leave Hours");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "div", 3);
        i0.ɵɵelement(29, "input", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div", 1);
        i0.ɵɵelementStart(31, "label", 15);
        i0.ɵɵtext(32, "Gender");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div", 3);
        i0.ɵɵelement(34, "input", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "label", 17);
        i0.ɵɵtext(36, "Marital Status");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "div", 3);
        i0.ɵɵelement(38, "input", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "div", 1);
        i0.ɵɵelementStart(40, "div", 3);
        i0.ɵɵelement(41, "input", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "div", 1);
        i0.ɵɵelementStart(43, "div", 3);
        i0.ɵɵelementStart(44, "button", 20);
        i0.ɵɵlistener("click", function EmployeeEditComponent_Template_button_click_44_listener() { return ctx.onBack(); });
        i0.ɵɵtext(45, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "div", 21);
        i0.ɵɵelementStart(47, "button", 22);
        i0.ɵɵlistener("click", function EmployeeEditComponent_Template_button_click_47_listener() { return ctx.onBack(); });
        i0.ɵɵtext(48, "Save");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formGroup", ctx.employeeForm);
    } }, directives: [i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlName], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmployeeEditComponent, [{
        type: Component,
        args: [{
                selector: 'app-employee-edit',
                template: `
      <div>
          <div>
              <form [formGroup]="employeeForm" (ngSubmit)="onBack()">
                  <div class="row form-group">
                      <label for="nationalIdNumber" class="col-sm-1 col-form-label">NationalIdNumber</label>
                      <div class="col-md-3">
                          <input id="nationalIdNumber" formControlName="nationalIdNumber" class="form-control" type="text">
                      </div>
                      <label for="loginId" class="col-sm-1 col-form-label">LoginId</label>
                      <div class="col-md-3">
                          <input id="loginId" class="form-control" type="text" formControlName="loginId"
                              placeholder="e.g. adventure-works\\loginName">
                      </div>
                  </div>
                  <div class="row form-group">
                      <label for="birthDate" class="col-sm-1 col-form-label">Birth Date</label>
                      <div class="col-md-3">
                          <input id="birthDate" class="form-control" type="text" formControlName="birthDate"
                              placeholder="e.g. 2003-01-07">
                      </div>
                      <label for="hireDate" class="col-sm-1 col-form-label">Hire Date</label>
                      <div class="col-md-3">
                          <input id="hireDate" class="form-control" type="text" formControlName="hireDate"
                              placeholder="e.g. 2003-01-07">
                      </div>
                  </div>

                  <div class="row form-group">
                      <label for="vacationHours" class="col-sm-1 col-form-label">Vacation Hours</label>
                      <div class="col-md-3">
                          <input id="vacationHours" class="form-control" type="text" formControlName="vacationHours"
                              placeholder="e.g. 5">
                      </div>
                      <label for="sickLeaveHours" class="col-sm-1 col-form-label">Sick Leave Hours</label>
                      <div class="col-md-3">
                          <input id="sickLeaveHours" class="form-control" type="text" formControlName="sickLeaveHours"
                              placeholder="e.g. 5">
                      </div>
                  </div>
                  <div class="row form-group">
                      <label for="gender" class="col-sm-1 col-form-label">Gender</label>
                      <div class="col-md-3">
                          <input id="gender" class="form-control" type="text" formControlName="gender">
                      </div>
                      <label for="maritalStatus" class="col-sm-1 col-form-label">Marital Status</label>
                      <div class="col-md-3">
                          <input id="maritalStatus" class="form-control" type="text" formControlName="maritalStatus">
                      </div>
                  </div>
                  <div class="row form-group">
                      <div class="col-md-3">
                          <input class="form-check-input" type="checkbox" id="salariedFlag">
                      </div>
                  </div>
              </form>
          </div>
      </div>

      <div class="row form-group">
          <div class="col-md-3">
              <button type="button" class="btn btn-secondary mb-2" (click)="onBack()">Back</button>
          </div>
          <div class="col-md-3 text-right">
              <button class="btn btn-primary mb-2" id="submit" type="Submit" (click)="onBack()">Save</button>
          </div>
      </div>
    `,
                encapsulation: ViewEncapsulation.Emulated
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.FormBuilder }]; }, null); })();
