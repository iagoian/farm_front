import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BasemapComponent } from "./basemap/basemap.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FarmComponent } from "./components/farm/farm.component";
import { RegisterFarmComponent } from './components/register-farm/register-farm.component';
import { ListFarmComponent } from './components/list-farm/list-farm.component';
import { UpdateFarmComponent } from './components/update-farm/update-farm.component';
import { DeletFarmComponent } from "./components/delete-farm/delete-farm.component";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    BasemapComponent,
    FarmComponent,
    DashboardComponent,
    RegisterFarmComponent,
    ListFarmComponent,
    UpdateFarmComponent,
    DeletFarmComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
