import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AuthenticationGuard } from './Guards/authentication.guard';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:LoginComponent},
  {path:"dashboard",canActivate:[AuthenticationGuard] ,component:DashboardComponent,children:[
    {path:"home",component:HomeComponent},
    {path:"complete",component:EmployeedetailsComponent},
    {path:"create",component:CreateEmployeeComponent},
    {path:"details",component:EmployeesComponent},
    {path:'',component:HomeComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
