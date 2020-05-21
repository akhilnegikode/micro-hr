import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routingComponents, EmployeeRoutingModule } from './employee-routing.module';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "./employee-index/employee-index.component";
import * as i2 from "./employee-detail/employee-detail.component";
import * as i3 from "./employee-edit/employee-edit.component";
export class EmployeeModule {
}
EmployeeModule.ɵmod = i0.ɵɵdefineNgModule({ type: EmployeeModule });
EmployeeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EmployeeModule_Factory(t) { return new (t || EmployeeModule)(); }, imports: [[
            SharedModule,
            EmployeeRoutingModule,
        ],
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EmployeeModule, { declarations: [i1.EmployeeIndexComponent, i2.EmployeeDetailComponent, i3.EmployeeEditComponent], imports: [SharedModule,
        EmployeeRoutingModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmployeeModule, [{
        type: NgModule,
        args: [{
                declarations: [routingComponents],
                imports: [
                    SharedModule,
                    EmployeeRoutingModule,
                ],
                exports: [
                    RouterModule
                ]
            }]
    }], null, null); })();
