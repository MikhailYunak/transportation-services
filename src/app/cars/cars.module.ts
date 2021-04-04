import { NgModule } from '@angular/core';
import { CarsListComponent } from './pages';
import { CarsRoutingModule } from './cars-routing.module';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [CarsListComponent],
  imports: [
    CarsRoutingModule,
    SharedModule
  ],
  exports: [CarsListComponent]
})
export class CarsModule { }
