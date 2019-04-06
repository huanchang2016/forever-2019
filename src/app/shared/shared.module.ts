import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HeadersComponent } from './component/headers/headers.component';
import { FootersComponent } from './component/footers/footers.component';
import { TopComponent } from './component/top/top.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

const SHAREDMODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  NgZorroAntdModule
];

const SHAREDCOMPONENTS = [
  HeadersComponent,
  FootersComponent,
  TopComponent,
  NavBarComponent
];

@NgModule({
  imports: [
    ...SHAREDMODULES
  ],
  declarations: [
    ...SHAREDCOMPONENTS
  ],
  exports: [
    ...SHAREDMODULES,
    ...SHAREDCOMPONENTS
  ]
})
export class SharedModule { }
