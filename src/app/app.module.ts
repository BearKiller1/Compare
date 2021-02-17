import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {UserModule} from './user/user.module';
import {AdminModule} from './admin/admin.module';

import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
