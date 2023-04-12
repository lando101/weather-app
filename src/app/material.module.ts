import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions, MatTooltipModule} from '@angular/material/tooltip';
export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 700,
  hideDelay: 200,
  touchendHideDelay: 1000,
};
@NgModule({
    imports: [MatToolbarModule, MatMenuModule, MatSlideToggleModule, BrowserAnimationsModule, MatIconModule, MatTabsModule, MatGridListModule, MatTooltipModule],
    exports: [MatToolbarModule, MatMenuModule, BrowserAnimationsModule, MatSlideToggleModule, MatIconModule, MatTabsModule, MatGridListModule, MatTooltipModule],
    providers: [{
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults
    }]
  })

export class MaterialModule { }
