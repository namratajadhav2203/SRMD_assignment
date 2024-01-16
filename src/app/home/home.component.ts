import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    center:true,
    items:3,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:true,
    nav: false,
    autoplay: true,
    navSpeed: 600,
    responsive: {
      0: {
        items: 1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  }
}
