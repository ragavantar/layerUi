import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    loop: true
  };

}
