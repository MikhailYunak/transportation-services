import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CarsService } from './services';



@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    CarsService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule ){
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
