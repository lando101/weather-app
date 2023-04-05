import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { heroUser, heroMagnifyingGlass } from '@ng-icons/heroicons/outline';
import { heroMapPinSolid } from '@ng-icons/heroicons/solid';



@NgModule({
    imports: [BrowserModule, NgIconsModule.withIcons({ heroUser, heroMapPinSolid, heroMagnifyingGlass})],
    exports: [NgIconsModule]
  })

export class IconsModule { }
