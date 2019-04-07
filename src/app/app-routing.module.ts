import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'web', pathMatch: 'full' },
  { path: 'web', loadChildren: './layout/layout-default/layout-default.module#LayoutDefaultModule' },
  { path: 'passport', loadChildren: './layout/layout-full-screen/layout-full-screen.module#LayoutFullScreenModule' },
  { path: 'center', loadChildren: './layout/layout-center/layout-center.module#LayoutCenterModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
