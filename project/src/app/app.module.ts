import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UjasComponent } from './ujas/ujas.component';
import { MapComponent } from './map/map.component';
import { ValDirective } from './directive/val.directive';

@NgModule({
  declarations: [
    AppComponent,
    UjasComponent,
    MapComponent,
    ValDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
