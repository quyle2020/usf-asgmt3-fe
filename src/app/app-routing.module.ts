import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StocksComponent } from './stocks/stocks.component';
import { StocksDetailComponent } from './stocks-detail/stocks-detail.component';
import { SampleComponent } from './sample/sample.component';
import { DividendsComponent } from './dividends/dividends.component';
import { DividendPicksComponent } from './dividend-picks/dividend-picks.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FinancialComponent } from './financial/financial.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'stock-detail', component: StocksDetailComponent },
  { path: 'sample', component: SampleComponent },
  { path: 'dividends', component: DividendsComponent },
  { path: 'dividend-picks', component: DividendPicksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'financial', component: FinancialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
