import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GaleryComponent } from './pages/galery/galery.component';
import { CrudComponent } from './pages/crud/crud.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PrivateMenuComponent } from './layout/private-menu/private-menu.component';
import { PublicMenuComponent } from './layout/public-menu/public-menu.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    GaleryComponent,
    CrudComponent,
    ProfileComponent,
    PrivateMenuComponent,
    PublicMenuComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
