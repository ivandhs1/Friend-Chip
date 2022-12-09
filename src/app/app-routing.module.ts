import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Index/home/home.component';
import { HomeUserComponent } from './Components/User/home-user/home-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'homeUser', component: HomeUserComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
