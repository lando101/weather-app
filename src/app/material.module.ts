import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    imports: [MatToolbarModule, MatMenuModule, MatSlideToggleModule, BrowserAnimationsModule, MatIconModule, MatTabsModule],
    exports: [MatToolbarModule, MatMenuModule, BrowserAnimationsModule, MatSlideToggleModule, MatIconModule, MatTabsModule]
  })

export class MaterialModule { }
