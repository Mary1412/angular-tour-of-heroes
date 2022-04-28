import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { MessagesComponent } from './messages/messages.component';
import { FirstCompComponent } from './hero-module/first-comp/first-comp.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationComponent } from './verification/verification.component';
import { RepasswordComponent } from './repassword/repassword.component';
import { AuthGuard } from './auth.guard';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { HeroesComponent } from './hero-module/heroes/heroes.component';
import { AuthComponent } from './auth/auth.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


const routes: Routes = [
  { path: 'heroes', component:HeroesComponent},
  { path: 'post', component:PostComponent},
  { path: 'detailpost/:id/:title', component:PostDetailComponent},
  { path: 'users', component:UsersComponent},
  { path: 'dashboard', component:DashboardComponent},
  
  { path: 'detailuser/:id/:name', component:UserDetailComponent},
  { path: 'message', component:MessagesComponent},
  { path: 'first2', component:FirstCompComponent, canActivate: [AuthGuard]},
  { path: 'first', component:FirstCompComponent},
  { path: 'login', component:AuthComponent},
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


