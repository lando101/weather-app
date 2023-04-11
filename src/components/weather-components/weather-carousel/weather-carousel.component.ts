import { animate, transition, trigger, useAnimation } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import Splide from '@splidejs/splide';
import { fadeIn, fadeOut } from 'ng-animate';

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
    arrows: false,
    // drag: "free",
    snap: true,
    waitForTransition: true,
    pagination: false,
  }
  @ViewChild('dragContainer', { static: false }) dragContainer: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
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
    // console.log('event', this.carousel.Components.Drag.isDragging())
    this.carousel.on('move', ()=>{
      let index = this.carousel.index;
      let num = (this.carousel.length) - this.options.perPage;

      this.setButtonState()
    })
  }


  next(){
    // Splide( '.splide' ).to;
    this.carousel.go('>');
    this.setButtonState();
  }

  prev(){
    this.carousel.go('<');
    this.setButtonState();
  }

  // if user slides the carousel this handles nav button state
  setButtonState(){
    let num = (this.carousel.length) - this.options.perPage;
    let index = this.carousel.index;

    if(index>0 && num === index){
      this.nextDisabled = true;
      this.prevDisabled = false;
    } else if (index > 0 && num !== index){
      this.nextDisabled = false;
      this.prevDisabled = false;
    } else if (index === 0){
      this.nextDisabled = false;
      this.prevDisabled = true;
    }
  }
}
