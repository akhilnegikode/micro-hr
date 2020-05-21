import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["routerLink", "employees"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵtext(1, "Employees");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(2, "router-outlet");
    } }, directives: [i1.RouterLinkWithHref, i1.RouterOutlet], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'app-root',
                template: `
    <a routerLink="employees">Employees</a>
    <router-outlet></router-outlet>
  `,
                styles: [`

  `]
            }]
    }], function () { return []; }, null); })();
