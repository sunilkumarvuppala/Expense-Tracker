import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { LocalStorageModule } from 'angular-2-local-storage';
import { PopupModule } from 'ng2-opd-popup';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ExpenseReportComponent } from './components/expense-report/expense-report.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';

import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { ExpenseService } from './services/expense.service';

const appRoutes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
    {
    path: 'report',
    component: ExpenseReportComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddExpenseComponent,
    ExpenseReportComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    PopupModule.forRoot(),
    LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        })
  ],
  providers: [AuthService, ValidateService, ExpenseService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
