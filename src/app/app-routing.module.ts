import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WardAddBlockComponent } from './ward-add-block/ward-add-block.component';
import{ P1AreaComponent } from './p1-area/p1-area.component';
import{ P2DetailsComponent } from './p2-details/p2-details.component';
import{ P3DetailsBuildingComponent } from './p3-details-building/p3-details-building.component';
import{ P3DetailsVacantComponent } from './p3-details-vacant/p3-details-vacant.component';
import{ P4ProTypeComponent } from './p4-pro-type/p4-pro-type.component';
import{ P5HouseShopLevelComponent } from './p5-house-shop-level/p5-house-shop-level.component';
import{ ProPicDetailsComponent } from './pro-pic-details/pro-pic-details.component';
const routes: Routes = [
  {
    path:'',redirectTo:'Login',pathMatch:'full'
  },
  {
    component:LoginComponent, path:'Login'
  },
  {
    component:DashboardComponent, path:'Dashboard'
  },
  {
    component:WardAddBlockComponent, path:'WardBlock'
  },
  {
    component:P1AreaComponent, path:'pro-area'
  },
  {
    component:P2DetailsComponent, path:'details'
  },
  {
    component:P3DetailsBuildingComponent, path:'building'
  },
  {
    component:P3DetailsVacantComponent, path:'vacant'
  },
  {
    component:P4ProTypeComponent, path:'pro-type'
  },
  {
    component:P5HouseShopLevelComponent, path:'house-shop'
  },
  {
    component:ProPicDetailsComponent, path:'picture'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
