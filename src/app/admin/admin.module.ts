import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin.routing.module';
import { AdminComponent } from './pages';
import { DashboardComponent } from './pages';
import { RightsComponent } from './pages';
import { UserComponent } from './pages';



@NgModule({
  declarations: [AdminComponent, DashboardComponent, RightsComponent, UserComponent],
  imports: [
    AdminRoutingModule,
  ],
})
export class AdminModule { }
