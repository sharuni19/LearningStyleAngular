import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnglishactivityportalComponent } from './englishactivityportal/englishactivityportal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EnglishquestionnairesComponent } from './englishquestionnaires/englishquestionnaires.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'englishactivityportal', component: EnglishactivityportalComponent },
  { path: 'englishquestionnaires', component: EnglishquestionnairesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
