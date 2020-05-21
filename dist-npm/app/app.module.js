import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeIndexComponent } from './employee/employee-index/employee-index.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: 'employees', loadChildren: () => import('./employee/employee.module').then(e => e.EmployeeModule)
    }];
export class HRModule {
    constructor(injector) {
        this.injector = injector;
        const employeeDetailComp = createCustomElement(EmployeeDetailComponent, { injector });
        customElements.define('employee-detail', employeeDetailComp);
        const employeeEditComp = createCustomElement(EmployeeEditComponent, { injector });
        customElements.define('employee-edit', employeeEditComp);
        const employeeIndexComp = createCustomElement(EmployeeIndexComponent, { injector });
        customElements.define('employee-index', employeeIndexComp);
    }
}
HRModule.ɵmod = i0.ɵɵdefineNgModule({ type: HRModule, bootstrap: [AppComponent] });
HRModule.ɵinj = i0.ɵɵdefineInjector({ factory: function HRModule_Factory(t) { return new (t || HRModule)(i0.ɵɵinject(i0.Injector)); }, providers: [], imports: [[
            BrowserModule,
            RouterModule.forRoot(routes)
        ],
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HRModule, { declarations: [AppComponent], imports: [BrowserModule, i1.RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HRModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent
                ],
                imports: [
                    BrowserModule,
                    RouterModule.forRoot(routes)
                ],
                providers: [],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA
                ],
                exports: [RouterModule],
                bootstrap: [AppComponent]
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
