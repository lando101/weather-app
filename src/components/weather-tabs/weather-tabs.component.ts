import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
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
  @ViewChild('tabGroup') tabGrp: MatTabGroup;
  selectedTab?: Tab;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    if (this.tabs.length > 0) {
      this.selectedTab = this.tabs[0];
      this.setActiveTab(this.tabs[0]);
    }
  }

  

  setActiveTab(tab: Tab){
    this.tabGrp.selectedIndex = tab.index;
    this.selectedTab = tab;
  }
}
