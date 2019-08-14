import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
//import the Angular Guard
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  { path: '', canActivate:[AuthGuard] , loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }