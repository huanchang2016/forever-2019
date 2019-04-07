import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HeadersComponent } from './component/headers/headers.component';
import { FootersComponent } from './component/footers/footers.component';
import { TopComponent } from './component/top/top.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SwiperBannerComponent } from './component/swiper-banner/swiper-banner.component';

const SHAREDMODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  SwiperModule, // Swiper 插件
  NgZorroAntdModule, // zorro  组件库
];

const SHAREDCOMPONENTS = [
  HeadersComponent,
  FootersComponent,
  TopComponent,
  NavBarComponent,
  SwiperBannerComponent
];

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  loop: true
};

@NgModule({
  imports: [
    ...SHAREDMODULES
  ],
  declarations: [
    ...SHAREDCOMPONENTS
  ],
  providers: [{ 
    provide: SWIPER_CONFIG, 
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  exports: [
    ...SHAREDMODULES,
    ...SHAREDCOMPONENTS
  ]
})
export class SharedModule { }
