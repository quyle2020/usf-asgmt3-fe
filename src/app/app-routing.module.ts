import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StocksComponent } from './stocks/stocks.component';
import { StocksDetailComponent } from './stocks-detail/stocks-detail.component';
import { SampleComponent } from './sample/sample.component';
import { DividendsComponent } from './dividends/dividends.component';
import { DividendPicksComponent } from './dividend-picks/dividend-picks.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stocks', component: StocksComponent},
  {path: 'stock-detail', component: StocksDetailComponent},
  {path: 'sample', component: SampleComponent},
  {path: 'dividends', component: DividendsComponent},
  {path: 'dividend-picks', component: DividendPicksComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
