import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './pages';

const routes: Routes = [
  { path: 'cars',  component: CarsListComponent,
    children :[
      { path: 'list', component: CarsListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {}
