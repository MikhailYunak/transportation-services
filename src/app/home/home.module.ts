import { NgModule } from '@angular/core';
import { AboutUsComponent } from './pages';
import { ContactUsComponent } from './pages';
import { HomeComponent } from './pages';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared';
import { CarsModule } from '../cars';
import { AdminModule } from '../admin/admin.module';



@NgModule({
  declarations: [AboutUsComponent, ContactUsComponent, HomeComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
    CarsModule,
    AdminModule
  ],
  exports: [AboutUsComponent, ContactUsComponent, HomeComponent, SharedModule]
})
export class HomeModule { }
