import { Component, OnInit } from '@angular/core';
import { SymbolService } from '../service/symbol.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss'],
  providers: [SymbolService]
})
export class FinancialComponent implements OnInit {

  pageName = 'Financial Statements';

  constructor(private symbolService: SymbolService) { }

  symbolName = new FormControl('');

  findSymbol() {
    this.symbolService.getStockDividend(this.symbolName.value)
      .subscribe((res)=>{
        console.log(res);
    });
  }



  ngOnInit() {
  }

}
