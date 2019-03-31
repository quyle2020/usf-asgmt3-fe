import { Component, OnInit } from '@angular/core';
import { SymbolService } from '../service/symbol.service';
import { FormControl } from '@angular/forms';
import { StockDetail } from '../models/stock-detail';

@Component({
  selector: 'app-stocks-detail',
  templateUrl: './stocks-detail.component.html',
  styleUrls: ['./stocks-detail.component.sass'],
  providers: [SymbolService]
})

export class StocksDetailComponent implements OnInit {

  // local variables
  pageName = 'Stock Detail';
  symbolName = new FormControl('');
  stockDetails: StockDetail;
  show = false;

  constructor(private symbolService: SymbolService) { }


  findSymbol() {

    this.show = false;

    this.symbolService.getStockDetail(this.symbolName.value)
    .subscribe((res) => {
      this.stockDetails = res;
      this.show = true;
      console.log(res);
  });

  }

  ngOnInit() {
  }
 
}
