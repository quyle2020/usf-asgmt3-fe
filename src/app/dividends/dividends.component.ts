import { Component, OnInit } from '@angular/core';
import { SymbolService } from '../service/symbol.service';
import { StockDividend } from '../models/stock-dividend';

@Component({
  selector: 'app-dividends',
  templateUrl: './dividends.component.html',
  styleUrls: ['./dividends.component.scss'],
  providers: [SymbolService]
})
export class DividendsComponent implements OnInit {

  pageName = 'Dividends';

  constructor(private symbolService: SymbolService) { }

  ngOnInit() {
    this.symbolService.getStockDividend('AAPL')
      .subscribe((res) => {
        console.log(res);
    }); }



}
