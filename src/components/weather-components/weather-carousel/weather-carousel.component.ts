import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgxSplideComponent, NgxSplideModule, NgxSplideSlideComponent } from 'ngx-splide';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-weather-carousel',
  templateUrl: './weather-carousel.component.html',
  styleUrls: ['./weather-carousel.component.scss'],
})
export class WeatherCarouselComponent implements AfterViewInit {
  // @ViewChild('carousel') carousel: Splide;
  carousel: Splide;
  width: number | undefined=0;
  prevDisabled: boolean = true;
  nextDisabled: boolean = false;
  active = 'slide1';
  slides: {title: string}[] = [
    {title: 'slide1'},
    {title: 'slide2'},
    {title: 'slide3'},
    {title: 'slide4'},
    {title: 'slide5'},
    {title: 'slide6'},
    {title: 'slide7'},
    {title: 'slide8'},
    {title: 'slide9'},
    {title: 'slide10'},
    {title: 'slide11'},
    {title: 'slide12'},
    {title: 'slide13'},
    {title: 'slide14'},
    {title: 'slide15'},
    {title: 'slide16'},
    {title: 'slide17'},
    {title: 'slide18'},
    {title: 'slide19'},
    {title: 'slide20'},
  ]
  options = {
    perPage: 5,
    gap: 10,
    paginationKeyboard: true,
    autoWidth: true,
    wheel: true,
    // drag: "free",
    snap: true,
    waitForTransition: true,
    pagination: false,
  }
  @ViewChild('dragContainer', { static: false }) dragContainer: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log('Window resized');
    console.log(this.width);
    this.width =undefined
    setTimeout(() => {
      this.width = this.dragContainer?.nativeElement?.offsetWidth;
      
    }, 500);
  }
  constructor() {
    // carousel.mount();

  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.width = this.dragContainer?.nativeElement?.offsetWidth;
    console.log('width', this.width);
    this.carousel = new Splide( '.splide', this.options ).mount();
    //@ts-ignore
    // this.carousel.options = this.options;
    // this.carousel.mount()
  }

  next(){
    // Splide( '.splide' ).to;
    this.carousel.go('>');
    let num = (this.carousel.length) - this.options.perPage;
    let index = this.carousel.index;
    if(num === index){
      this.nextDisabled = true;
    } else {
      this.nextDisabled = false;
    }
    console.log('num', num)
    this.prevDisabled = false;
  }

  prev(){
    this.carousel.go('<');
    let index = this.carousel.index;
    if(index === 0){
      this.prevDisabled = true;
    } else {
      this.prevDisabled = false;
    }
    this.nextDisabled = false;
    console.log('num', index)
  }
}
