import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoteListComponent } from './vote-list/vote-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import en from '@angular/common/locales/en';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';

//导入icons图片
import * as AllIcons from '@ant-design/icons-angular/icons';
import { VoteContentComponent } from './vote-content/vote-content.component';
import { ContentEachComponent } from './vote-content/content-each/content-each.component';
import { ContentStatusComponent } from './vote-content/content-status/content-status.component';
const antDesignIcons = AllIcons as {
   [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
registerLocaleData(en);

@NgModule({
   declarations: [
      AppComponent,
      VoteListComponent,
      VoteContentComponent,
      ContentEachComponent,
      ContentStatusComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      NzIconModule,
      HttpClientModule,
      BrowserAnimationsModule,
      NzModalModule,
      NzButtonModule,
      NzGridModule
   ],
   providers: [
      { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
