import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutFullScreenComponent } from './layout-full-screen.component';

const routes: Routes = [
  { path: '', component: LayoutFullScreenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutFullScreenRoutingModule { }
