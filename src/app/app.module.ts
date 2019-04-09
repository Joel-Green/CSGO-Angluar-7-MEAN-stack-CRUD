import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LightboxModule } from 'ngx-lightbox';
import { WeaponServiceService } from './weapon-service.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderGlobalComponent } from './header-global/header-global.component';
import { FooterGlobalComponent } from './footer-global/footer-global.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { LearnMainComponent } from './learn-main/learn-main.component';
import { UpdatesMainComponent } from './updates-main/updates-main.component';
import { FeedbackMainComponent } from './feedback-main/feedback-main.component';
import { LearnUtilityComponent } from './learn-utility/learn-utility.component';
import { LearnMapsComponent } from './learn-maps/learn-maps.component';
import { LearnWeaponsComponent } from './learn-weapons/learn-weapons.component';
import { LearnAimComponent } from './learn-aim/learn-aim.component';
import { LearnSprayComponent } from './learn-spray/learn-spray.component';
import { DashboardInputComponent } from './dashboard-input/dashboard-input.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { CtDataComponent } from './ct-data/ct-data.component';
import { TDataComponent } from './t-data/t-data.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { UpdatepageService } from './updatepage.service';

import { FeedbackService } from './feedback.service';





@NgModule({
  declarations: [
    AppComponent,
    HeaderGlobalComponent,
    FooterGlobalComponent,
    HomeMainComponent,
    LearnMainComponent,
    UpdatesMainComponent,
    FeedbackMainComponent,
    LearnUtilityComponent,
    LearnMapsComponent,
    LearnWeaponsComponent,
    LearnAimComponent,
    LearnSprayComponent,
    DashboardInputComponent,
    UpdateDataComponent,
    CtDataComponent,
    TDataComponent,
    UploadImageComponent,
    FileSelectDirective
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LightboxModule,
    HttpClientModule
  ],
  providers: [WeaponServiceService,UpdatepageService,FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
