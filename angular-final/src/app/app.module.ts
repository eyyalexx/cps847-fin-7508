import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, Response, HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HourlyComponent } from './components/hourly/hourly.component';

const appRoutes: Routes = [{path:'',component:HourlyComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HourlyComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
