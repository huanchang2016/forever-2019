import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutFullScreenComponent } from './layout-full-screen.component';

const routes: Routes = [
  { path: '', component: LayoutFullScreenComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadChildren: 'src/app/modules/login/login.module#LoginModule' },
      { path: 'register', loadChildren: 'src/app/modules/register/register.module#RegisterModule' },
      { path: 'agreement', loadChildren: 'src/app/modules/agreement/agreement.module#AgreementModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutFullScreenRoutingModule { }
