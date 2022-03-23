import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationComponent } from './verification/verification.component';
import { RepasswordComponent } from './repassword/repassword.component';
import { AuthGuard } from './auth.guard';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'heroes', component:HeroesComponent},
  { path: 'users', component:UsersComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'detail/:id/:name', component:HeroDetailComponent},
  { path: 'detailuser/:id/:name', component:UserDetailComponent},
  { path: 'message', component:MessagesComponent},
  { path: 'first2', component:FirstCompComponent, canActivate: [AuthGuard]},
  { path: 'first', component:FirstCompComponent},
  { path: 'login', component:LoginComponent},
  { path: 'signup', component:SignupComponent},
  { path: 'verification', component:VerificationComponent},
  { path: 'repass', component:RepasswordComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


