import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StocksComponent } from './stocks/stocks.component';
import { StocksDetailComponent } from './stocks-detail/stocks-detail.component';
import { TopbarComponent } from './topbar/topbar.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stocks', component: StocksComponent},
  {path: 'stock-detail', component: StocksDetailComponent},
  {path: 'topbar', component: TopbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
