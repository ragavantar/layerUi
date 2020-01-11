import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-entry',
  templateUrl: 'entry.page.html',
  styleUrls: ['entry.page.scss'],
})
export class EntryPage {

  isDesktop : boolean;

  constructor(public platform: Platform) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.isDesktop = this.platform.is('desktop') ? true : false;
    });
  }
}
