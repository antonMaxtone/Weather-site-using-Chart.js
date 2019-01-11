import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lec-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ImagesComponent implements OnInit {images = [1, 2, 3, 4].map(() => `https://picsum.photos/1265/500?random&t=${Math.random()}`);
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
   }

  ngOnInit() {
  }

}
