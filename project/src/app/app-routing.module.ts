import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SubmitComponent } from './login/submit/submit.component';
import { MapComponent } from './map/map.component';
import { UjasComponent } from './ujas/ujas.component';

const routes: Routes = [
  {
    path:'submit',
    component:SubmitComponent
  },
  {
    path:"map",
    component:MapComponent
  },
  {
    path:"ujas",
    component:UjasComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
