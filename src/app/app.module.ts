import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Index/home/home.component';
import { RegisterComponent } from './Components/Index/register/register.component';
import { LoginComponent } from './Components/Index/login/login.component';
import { HomeUserComponent } from './Components/User/home-user/home-user.component';
import { ProfileUserComponent } from './Components/User/profile-user/profile-user.component';
import { ChatUserComponent } from './Components/User/chat-user/chat-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HomeUserComponent,
    ProfileUserComponent,
    ChatUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
