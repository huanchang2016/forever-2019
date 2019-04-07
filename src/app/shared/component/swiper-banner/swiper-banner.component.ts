import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-swiper-banner',
  templateUrl: './swiper-banner.component.html',
  styleUrls: ['./swiper-banner.component.scss']
})
export class SwiperBannerComponent implements OnInit {

  imgList = [
    { link: '/', src: '/assets/imgs/test/banner1.jpg', alt: '图片说明' },
    { link: 'http://www.cdtfhr.com', src: '/assets/imgs/test/banner2.jpg', alt: '图片说明' },
    { link: 'http://www.baidu.com', src: '/assets/imgs/test/banner3.jpg', alt: '图片说明' },
    { link: '/', src: '/assets/imgs/test/banner4.jpg', alt: '图片说明' },
    { link: '/', src: '/assets/imgs/test/banner5.jpg', alt: '图片说明' }
  ];
  config: SwiperConfigInterface;

  constructor() { }

  index:number = 0;
  ngOnInit() {
    this.config = {
      speed:500,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      slidesPerView: 'auto',
      loopedSlides: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    }
  }

  changeIndexPrev(e: Event) {
    e.stopPropagation();
    if(this.index == 0) {
      this.index = this.imgList.length - 1;
    }else {
      this.index--;
    }
  }
  changeIndexNext(e: Event) {
    e.stopPropagation();
    if(this.index == this.imgList.length - 1) {
      this.index = 0;
    }else {
      this.index++;
    }
    

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.initViewBanner();
  }

  initViewBanner() {
    
  }

}
