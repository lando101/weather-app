import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
interface Tab {
  index: number;
  title: string;
  component: any;
}
@Component({
  selector: 'app-weather-tabs',
  templateUrl: './weather-tabs.component.html',
  styleUrls: ['./weather-tabs.component.scss'],
})
export class WeatherTabsComponent implements OnInit {
  @Input() tabs: Tab[] = [];
  @ViewChild('tabContent', { read: ViewContainerRef, static: true }) tabContent!: ViewContainerRef;
  selectedTab?: Tab;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // if (this.tabs.length > 0) {
    //   this.selectTab(this.tabs[0].index);
    // }
  }


}
