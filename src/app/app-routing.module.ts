import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'web', pathMatch: 'full' },
  { path: 'web', loadChildren: './pages/layout-default/layout-default.module#LayoutDefaultModule' },
  { path: 'fullscreen', loadChildren: './pages/layout-full-screen/layout-full-screen.module#LayoutFullScreenModule' },
  { path: 'center', loadChildren: './pages/layout-center/layout-center.module#LayoutCenterModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
