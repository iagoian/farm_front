import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { DeletFarmComponent } from './components/delete-farm/delete-farm.component';
import { FarmComponent } from './components/farm/farm.component'
import { ListFarmComponent } from './components/list-farm/list-farm.component';
import { RegisterFarmComponent } from './components/register-farm/register-farm.component';
import { UpdateFarmComponent } from './components/update-farm/update-farm.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: 'full', component: ListFarmComponent },
  { path: 'farm', component: FarmComponent },
  { path: 'register-farm', component: RegisterFarmComponent},
  { path: 'list-farm', component: ListFarmComponent},
  { path: 'update-farm', component: UpdateFarmComponent},
  { path: 'delete-farm', component: DeletFarmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
