import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public mobile$: Observable<boolean> | undefined;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.mobile$ = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(map(({matches}) => matches));
  }
  ngOnInit(): void {
    this.mobile$?.subscribe(e => console.log(e));
  }

}
