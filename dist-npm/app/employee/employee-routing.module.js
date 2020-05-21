import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeIndexComponent } from './employee-index/employee-index.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '', component: EmployeeIndexComponent, data: { title: "Employee List" }
    },
    {
        path: ':id', component: EmployeeDetailComponent, data: { title: "Employee Detail" }
    },
    {
        path: 'edit/:id', component: EmployeeEditComponent, data: { title: "Employee Edit" }
    }
];
export class EmployeeRoutingModule {
}
EmployeeRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: EmployeeRoutingModule });
EmployeeRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EmployeeRoutingModule_Factory(t) { return new (t || EmployeeRoutingModule)(); }, imports: [[
            RouterModule.forChild(routes)
        ],
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EmployeeRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmployeeRoutingModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    RouterModule.forChild(routes)
                ],
                exports: [RouterModule]
            }]
    }], null, null); })();
export const routingComponents = [EmployeeIndexComponent, EmployeeDetailComponent, EmployeeEditComponent];
