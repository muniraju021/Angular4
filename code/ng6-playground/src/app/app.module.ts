import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TemplateBaiscsComponent } from './template-baiscs/template-baiscs.component';
import { AppPropertyBindingComponent } from './app-property-binding/app-property-binding.component';
import { AppEventBindingComponent } from './app-event-binding/app-event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplateBaiscsComponent,
    AppPropertyBindingComponent,
    AppEventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
