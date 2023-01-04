import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EchipaComponent } from './echipa/echipa.component';
import { RezultateComponent } from './rezultate/rezultate.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'admin', component: AdminComponent},
    {path: 'echipa', component: EchipaComponent},
    {path: 'rezultate', component: RezultateComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
