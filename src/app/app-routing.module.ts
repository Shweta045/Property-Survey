import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{WardAndBlockComponent} from './ward-and-block/ward-and-block.component'

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
    component:WardAndBlockComponent, path:'WardBlock'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
