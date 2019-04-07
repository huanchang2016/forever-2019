import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutCenterComponent } from './layout-center.component';

const routes: Routes = [
  { path: '', component: LayoutCenterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutCenterRoutingModule { }
