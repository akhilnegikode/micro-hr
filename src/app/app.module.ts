import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeIndexComponent } from './employee/employee-index/employee-index.component';

const routes: Routes = [{
  path: 'employees', loadChildren: () => import('./employee/employee.module').then(e => e.EmployeeModule)
}];

@NgModule({
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
})
export class HRModule {
  constructor(private injector: Injector) {
    const employeeDetailComp = createCustomElement(EmployeeDetailComponent, { injector });
    customElements.define('employee-detail', employeeDetailComp);
    const employeeEditComp = createCustomElement(EmployeeEditComponent, { injector });
    customElements.define('employee-edit', employeeEditComp);
    const employeeIndexComp = createCustomElement(EmployeeIndexComponent, { injector });
    customElements.define('employee-index', employeeIndexComp);
  }
}
