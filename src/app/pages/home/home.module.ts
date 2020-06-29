import { InfoPageModule } from './../../modals/info/info.module';
import { InfoPage } from './../../modals/info/info.page';
import { RememberPageModule } from './../../modals/remember/remember.module';
import { RememberPage } from './../../modals/remember/remember.page';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  entryComponents: [
      RememberPage,
      InfoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule.forChild(),
    RememberPageModule,
    InfoPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {
  constructor() {}	
}
