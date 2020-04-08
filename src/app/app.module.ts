import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { PagesComponent } from './pages/pages.component';
import { SignupComponent } from './signup/signup.component';
import { MapComponent } from './shared/map/map.component';
import { UsersComponent } from './pages/config/users/users.component';
import { MailsComponent } from './pages/config/mails/mails.component';
import { VehiclesComponent } from './pages/config/vehicles/vehicles.component';
import { TaskInfoComponent } from './pages/config/task-info/task-info.component';
import { JourneyComponent } from './pages/components/journey/journey.component';
import { TasksComponent } from './pages/components/tasks/tasks.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoPageFoundComponent,
    DashboardComponent,
    ProgressComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    PagesComponent,
    SignupComponent,
    MapComponent,
    UsersComponent,
    MailsComponent,
    VehiclesComponent,
    TaskInfoComponent,
    JourneyComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
