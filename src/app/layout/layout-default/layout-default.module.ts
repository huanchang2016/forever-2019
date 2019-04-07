import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { LayoutDefaultRoutingModule } from './layout-default-routing.module';
import { LayoutDefaultComponent } from './layout-default.component';

@NgModule({
  declarations: [
    LayoutDefaultComponent
  ],
  imports: [
    SharedModule,
    LayoutDefaultRoutingModule
  ]
})
export class LayoutDefaultModule { }
