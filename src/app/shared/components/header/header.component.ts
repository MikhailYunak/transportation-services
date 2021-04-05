import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mex-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() sideNav: any;
  @Input() mobile: boolean | null | undefined;

  public localesList: any[] = [
    {code: 'eu-US', label: 'English', flag: 'assets/img/flag-united-states.png'},
    {code: 'ru', label: 'Руский', flag: 'assets/img/flag-russia.png'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
