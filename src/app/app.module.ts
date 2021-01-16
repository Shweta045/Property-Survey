import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WardAddBlockComponent } from './ward-add-block/ward-add-block.component';
import { P1AreaComponent } from './p1-area/p1-area.component';
import { P2DetailsComponent } from './p2-details/p2-details.component';
import { P3DetailsBuildingComponent } from './p3-details-building/p3-details-building.component';
import { P3DetailsVacantComponent } from './p3-details-vacant/p3-details-vacant.component';
import { P4ProTypeComponent } from './p4-pro-type/p4-pro-type.component';
import { P5HouseShopLevelComponent } from './p5-house-shop-level/p5-house-shop-level.component';
import { ProPicDetailsComponent } from './pro-pic-details/pro-pic-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    WardAddBlockComponent,
    P1AreaComponent,
    P2DetailsComponent,
    P3DetailsBuildingComponent,
    P3DetailsVacantComponent,
    P4ProTypeComponent,
    P5HouseShopLevelComponent,
    ProPicDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
