import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages';
import { DashboardComponent } from './pages';
import { RightsComponent } from './pages';
import { UserComponent } from './pages';

const routes: Routes = [
  {   path: 'admin', component: AdminComponent,
    children :[
      { path: 'dashboard', component: DashboardComponent},
      { path: 'user', component: UserComponent},
      { path: 'rights', component: RightsComponent},
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
