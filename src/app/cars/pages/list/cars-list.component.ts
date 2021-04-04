import { Component } from '@angular/core';

import { CarsService } from '../../../core';
import { Car } from '../../../core';

@Component({
  selector: 'mex-cars',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {
  userName = 'angular';
  repos: Car[] | undefined;

  loading = false;
  errorMessage: string | undefined;

  constructor(private githubService: CarsService) {
  }

  public getRepos() {
    this.loading = true;
    this.errorMessage = '';
    this.githubService.getRepos(this.userName)
      .subscribe(response => {this.repos = response;},
        (error) => {this.errorMessage = error; this.loading = false; },
        () => {this.loading=false;});
  }

}
