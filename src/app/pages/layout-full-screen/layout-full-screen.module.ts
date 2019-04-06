import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { LayoutFullScreenRoutingModule } from './layout-full-screen-routing.module';
import { LayoutFullScreenComponent } from './layout-full-screen.component';

@NgModule({
  declarations: [
    LayoutFullScreenComponent
  ],
  imports: [
    SharedModule,
    LayoutFullScreenRoutingModule
  ]
})
export class LayoutFullScreenModule { }
