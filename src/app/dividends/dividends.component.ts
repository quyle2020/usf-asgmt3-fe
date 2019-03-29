import { Component, OnInit } from '@angular/core';
import { SymbolService } from '../service/symbol.service';
import { FormControl } from '@angular/forms';
import { StockDividend } from '../models/stock-dividend';
import { StockDetail } from '../models/stock-detail';
import { StocksDetailComponent } from '../stocks-detail/stocks-detail.component';

@Component({
  selector: 'app-dividends',
  templateUrl: './dividends.component.html',
  styleUrls: ['./dividends.component.scss'],
  providers: [SymbolService]
})
export class DividendsComponent implements OnInit {

  pageName = 'Dividends';
  defaultSymbol = 'AAPL';
  symbolName = new FormControl('');
  show = false;
  private dividendData: Array<object> = [];
  stockDetails: StockDetail;

  constructor(private symbolService: SymbolService) { }

  findSymbol() {

    this.show = false;

    this.symbolService.getStockDividend(this.symbolName.value)
      .subscribe((data: Array<object>) => {
        this.dividendData = data;
        console.log(data);
        this.show = true;
      });

    this.symbolService.getStockDetail(this.symbolName.value)
    .subscribe((res) => {
      this.stockDetails = res;
      this.show = true;
  });

  }

  ngOnInit() {

  }
}
