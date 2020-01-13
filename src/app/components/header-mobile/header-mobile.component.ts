import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  catalog: string = 'menu';
  sidebar: boolean = false;

  showCatalog(val) {
    this.catalog = val;
    console.log(val)
  }

  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }

}
