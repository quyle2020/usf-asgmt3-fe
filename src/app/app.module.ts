import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StocksComponent } from './stocks/stocks.component';
import { StocksDetailComponent } from './stocks-detail/stocks-detail.component';
import { SharedModule } from './shared/shared.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { AgGridModule } from 'ag-grid-angular';
import { TopbarComponent } from './topbar/topbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    StocksComponent,
    StocksDetailComponent,
    TopbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    AngularFontAwesomeModule,
    SharedModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
