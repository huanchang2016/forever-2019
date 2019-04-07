import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AgreementRoutingModule } from './agreement-routing.module';
import { AgreementComponent } from './agreement.component';

@NgModule({
  declarations: [AgreementComponent],
  imports: [
    SharedModule,
    AgreementRoutingModule
  ]
})
export class AgreementModule { }