import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class SharedModule {
}
SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            RouterModule
        ],
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule], exports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    RouterModule
                ],
                exports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    RouterModule
                ]
            }]
    }], null, null); })();
