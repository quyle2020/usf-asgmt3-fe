import { Component, OnInit } from '@angular/core';
import { SymbolService } from '../service/symbol.service';
import { StockPrice } from '../models/stock-price';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
