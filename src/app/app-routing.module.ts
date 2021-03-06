import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMainComponent } from './home-main/home-main.component';
import { UpdatesMainComponent } from './updates-main/updates-main.component';
import { LearnMainComponent } from './learn-main/learn-main.component';
import { FeedbackMainComponent } from './feedback-main/feedback-main.component';
import { LearnAimComponent } from './learn-aim/learn-aim.component';
import { LearnMapsComponent } from './learn-maps/learn-maps.component';
import { LearnUtilityComponent } from './learn-utility/learn-utility.component';
import { LearnWeaponsComponent } from './learn-weapons/learn-weapons.component';
import { DashboardInputComponent } from './dashboard-input/dashboard-input.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { DashUpdatesComponent } from './dash-updates/dash-updates.component';
import { DashUpdateContentComponent } from './dash-update-content/dash-update-content.component';
import { UpdatepageimguploadComponent } from './updatepageimgupload/updatepageimgupload.component';


const routes: Routes = [{
  path:"",component:HomeMainComponent
},
{
  path:"Updates",component:UpdatesMainComponent
},
{
  path:"Learn",component:LearnMainComponent
},

{
  path:"Feedback",component:FeedbackMainComponent
},
{
  path:"Aim",component:LearnAimComponent,outlet:'learn-outlet'
},
{
  path:"Maps",component:LearnMapsComponent,outlet:'learn-outlet'
},
{
  path:"Utility",component:LearnUtilityComponent,outlet:'learn-outlet'
},
{
  path:"Weapons",component:LearnWeaponsComponent,outlet:'learn-outlet'
},
{
  path:"dashboard",component:DashboardInputComponent
},
{
  path:"update/:id",component:UpdateDataComponent
},
{
  path:"upcontent/:id",component:DashUpdateContentComponent
},
{
  path:"upload/:id",component:UploadImageComponent
},
{
  path:"uploadImage/:id",component:UpdatepageimguploadComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
