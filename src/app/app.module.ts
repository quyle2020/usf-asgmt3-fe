import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StocksComponent } from './stocks/stocks.component';
import { StocksDetailComponent } from './stocks-detail/stocks-detail.component';
import { SharedModule } from './shared/shared.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { SampleComponent } from './sample/sample.component';
import { DividendsComponent } from './dividends/dividends.component';
import { DividendPicksComponent } from './dividend-picks/dividend-picks.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    StocksComponent,
    StocksDetailComponent,
    SampleComponent,
    DividendsComponent,
    DividendPicksComponent,
    TopbarComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HighchartsChartModule,
    SharedModule,
    AgGridModule.withComponents([]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public isCollapsed = false;
}
