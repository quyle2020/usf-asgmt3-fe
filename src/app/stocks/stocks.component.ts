import { Component, OnInit } from '@angular/core';
import { IxtradingService } from '../service/ixtrading.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.sass'],
  providers: [IxtradingService]
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
  
    constructor(private ixtradingService: IxtradingService) { }

  ngOnInit() {
    this.lineChart1y = this.lineChartOption();
    this.lineChart6m = this.lineChartOption();
    this.lineChart3m = this.lineChartOption();
    var symbol = 'AAPL';
    this.loadLineChart1y(symbol);
    this.loadLineChart6m(symbol);
    this.loadLineChart3m(symbol);
  }


  loadLineChart1y(symbol: string)
  {
    setTimeout(() => {
      this.ixtradingService.getPrice1y(symbol)
      .subscribe((res) => {

          var series = { 
          name: '',
          data: []
        };
        
        // populate plotting points
        res.forEach((x) =>{
          series.data.push(x.close);
          this.lineChart1y.xAxis.categories.push(x.date);
        });

        // adding plotting to chart
        this.lineChart1y.series.push(series);

        this.updateFromInput =true;
      });
    },200);

  }

  loadLineChart6m(symbol: string)
  {
    setTimeout(() => {
      this.ixtradingService.getPrice6m(symbol)
      .subscribe((res) => {

          var series = { 
          name: '',
          data: []
        };
        
        // populate plotting points
        res.forEach((x) =>{
          series.data.push(x.close);
          this.lineChart6m.xAxis.categories.push(x.date);
        });

        // adding plotting to chart
        this.lineChart6m.series.push(series);

        this.updateFromInput1 =true;
      });
    },200);

  }

  loadLineChart3m(symbol: string)
  {
    setTimeout(() => {
      this.ixtradingService.getPrice3m(symbol)
      .subscribe((res) => {

          var series = { 
          name: '',
          data: []
        };
        
        // populate plotting points
        res.forEach((x) =>{
          series.data.push(x.close);
          this.lineChart3m.xAxis.categories.push(x.date);
        });

        // adding plotting to chart
        this.lineChart3m.series.push(series);

        this.updateFromInput2 =true;
      });
    },200);

  }

  lineChartOption(){
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
      series: []
    };

  }

}
