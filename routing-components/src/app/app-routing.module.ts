import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AboutComponent } from './components/about/about.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { EmployeesComponent } from './components/employees/employees.component';
const routes: Routes = [
{path: '',component: HomeComponent},
{path:'employees',component:EmployeesComponent},
{path: 'about',component: AboutComponent},
{path: 'stocks',component: StocksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
