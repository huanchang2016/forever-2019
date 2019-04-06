import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { LayoutCenterRoutingModule } from './layout-center-routing.module';
import { LayoutCenterComponent } from './layout-center.component';
@NgModule({
  declarations: [
    LayoutCenterComponent
  ],
  imports: [
    SharedModule,
    LayoutCenterRoutingModule
  ]
})
export class LayoutCenterModule { }
