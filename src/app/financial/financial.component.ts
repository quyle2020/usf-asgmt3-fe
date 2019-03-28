import { Component, OnInit } from '@angular/core';
import { SymbolService } from '../service/symbol.service';
import { FormControl } from '@angular/forms';
import { StockFinancial } from '../models/stock-financial';
@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss'],
  providers: [SymbolService]
})
export class FinancialComponent implements OnInit {

  // local variables
  pageName = 'Financial Statements';
  symbolName = new FormControl('');
  financialStatements: StockFinancial[] = [];
  show = false;

  constructor(private symbolService: SymbolService) { }


  findSymbol() {
    this.show = false;
    this.symbolService.getStockFinancialData(this.symbolName.value)
      .subscribe((res) => {
        this.setFinancialData(res);
        this.show = true;
    });
  }

  ngOnInit() {
  }

  setFinancialData(res: StockFinancial[]) {
    this.financialStatements = res.map(function foo(val) {
      return {
        symbol: val.symbol,
        reportDate: val.reportDate,
        grossProfit: val.grossProfit,
        costOfRevenue: val.costOfRevenue,
        operatingRevenue: val.operatingRevenue,
        totalRevenue: val.totalRevenue,
        operatingIncome: val.operatingIncome,
        netIncome: val.netIncome,
        researchAndDevelopment: val.researchAndDevelopment,
        operatingExpense: val.operatingExpense,
        currentAssets: val.currentAssets,
        totalAssets: val.totalAssets,
        totalLiabilities: val.totalLiabilities,
        currentCash: val.currentCash,
        currentDebt: val.currentDebt,
        totalCash: val.totalCash,
        totalDebt: val.totalDebt,
        shareholderEquity: val.shareholderEquity,
        cashChange: val.cashChange,
        cashFlow: val.cashFlow
      };
    });
  }
}
