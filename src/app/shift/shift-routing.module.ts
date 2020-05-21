import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeIndexComponent } from './employee-index/employee-index.component';

const routes: Routes = [
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

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
export const routingComponents = [EmployeeIndexComponent, EmployeeDetailComponent, EmployeeEditComponent]