import { Component, OnInit } from '@angular/core';
import { IxtradingService } from '../service/ixtrading.service';
import { SymbolService } from '../service/symbol.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { StockDetail } from '../models/stock-detail';
import * as Highcharts from 'highcharts';
import * as moment from 'moment';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.sass'],
  providers: [IxtradingService, SymbolService]
})
export class StocksComponent implements OnInit {

    pageName = 'Stocks';

    // chart parameters
    Highcharts = Highcharts;
    lineChart1y: any;
    lineChart6m: any;
    lineChart3m: any;
    updateFromInput = false;
    updateFromInput1 = false;
    updateFromInput2 = false;

    symbolName = new FormControl('');
    public stockDetails: StockDetail;
    show = false;
    defaultSymbol = 'AAPL';

    public dateSpan: FormGroup;


    constructor(private ixtradingService: IxtradingService, private formBuilder: FormBuilder, private symbolService: SymbolService) { }

  ngOnInit() {
    this.lineChart1y = this.lineChartOption();
    this.lineChart6m = this.lineChartOption();
    this.lineChart3m = this.lineChartOption();

    this.dateSpan = this.formBuilder.group({
      model: '1y'
    });

  }

  findSymbol() {
    // this.show = false;

    this.lineChart1y.series = [];
    this.lineChart6m.series = [];
    this.lineChart3m.series = [];
    this.lineChart1y.xAxis.categories = [];
    this.lineChart6m.xAxis.categories = [];
    this.lineChart3m.xAxis.categories = [];
    this.loadLineChart1y(this.symbolName.value);
    this.loadLineChart6m(this.symbolName.value);
    this.loadLineChart3m(this.symbolName.value);

    // this.show = true;

    this.symbolService.getStockDetail(this.symbolName.value)
    .subscribe((res) => {
      this.stockDetails = res;
      // this.show = true;
    });
  }


  loadLineChart1y(symbol: string)
  {
    setTimeout(() => {
      this.ixtradingService.getPrice1y(symbol)
      .subscribe((res) => {

          var series = {
          name: symbol,
          data: []
        };

        // populate plotting points
          res.forEach((x) =>{
            series.data.push(x.close);
            this.lineChart1y.xAxis.categories.push(moment(x.date).format('MM-YYYY'));
        });

        // adding plotting to chart
          this.lineChart1y.series.push(series);

          this.updateFromInput = true;
      });
    }, 200);

  }

  loadLineChart6m(symbol: string) {
    setTimeout(() => {
      this.ixtradingService.getPrice6m(symbol)
      .subscribe((res) => {

          var series = {
          name: symbol,
          data: []
        };

          // populate plotting points
          res.forEach((x) => {
            series.data.push(x.close);
            this.lineChart6m.xAxis.categories.push(moment(x.date).format('MM-YYYY'));
          });

          // adding plotting to chart
          this.lineChart6m.series.push(series);

          this.updateFromInput1 = true;
      });
    }, 200);

  }

  loadLineChart3m(symbol: string)
  {
    setTimeout(() => {
      this.ixtradingService.getPrice3m(symbol)
      .subscribe((res) => {

          var series = {
          name: symbol,
          data: []
        };

          // populate plotting points
          res.forEach((x) => {
            series.data.push(x.close);
            this.lineChart3m.xAxis.categories.push(moment(x.date).format('MM-YYYY'));
          });

          // adding plotting to chart
          this.lineChart3m.series.push(series);

          this.updateFromInput2 = true;
      });
    }, 200);

  }

  lineChartOption() {
    return {
      chart: {
        renderTo: 'container',
        type: 'area'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: []
      },
      yAxis: {
        title: {
          text: 'closing price'
        },
      },
      rangeSelector: {
        selected: 1
      },
      series: []
    };

  }



}
