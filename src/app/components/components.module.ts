import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderDesktopComponent } from './header-desktop/header-desktop.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { ProdCardComponent } from './prod-card/prod-card.component';

const components = [
  HeaderDesktopComponent,
  HeaderMobileComponent,
  ProdCardComponent
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
