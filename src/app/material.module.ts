import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports: [MatToolbarModule, MatMenuModule, MatSlideToggleModule, BrowserAnimationsModule, MatIconModule, MatTabsModule, MatGridListModule],
    exports: [MatToolbarModule, MatMenuModule, BrowserAnimationsModule, MatSlideToggleModule, MatIconModule, MatTabsModule, MatGridListModule]
  })

export class MaterialModule { }
