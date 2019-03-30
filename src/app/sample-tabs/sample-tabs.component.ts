import { Component, OnInit } from '@angular/core';
import { IxtradingService } from '../service/ixtrading.service';
import { FormControl } from '@angular/forms';
import * as Highcharts from 'highcharts';
import * as moment from 'moment'

@Component({
  selector: 'app-sample-tabs',
  templateUrl: './sample-tabs.component.html',
  styleUrls: ['./sample-tabs.component.scss'],
  providers: [IxtradingService]
})
export class SampleTabsComponent implements OnInit {

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
    show = false;
    defaultSymbol = 'AAPL';

    constructor(private ixtradingService: IxtradingService) { }

  ngOnInit() {
    this.lineChart1y = this.lineChartOption();
    this.lineChart6m = this.lineChartOption();
    this.lineChart3m = this.lineChartOption();
   
  }

  findSymbol() {
    this.show = false;
    
    this.lineChart1y.series = [];
    this.lineChart6m.series = [];
    this.lineChart3m.series = [];
    this.lineChart1y.xAxis.categories = [];
    this.lineChart6m.xAxis.categories = [];
    this.lineChart3m.xAxis.categories = [];
    this.loadLineChart1y(this.symbolName.value);
    this.loadLineChart6m(this.symbolName.value);
    this.loadLineChart3m(this.symbolName.value);
    
    this.show = true;
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
          name: symbol,
          data: []
        };
        
        // populate plotting points
        res.forEach((x) =>{
          series.data.push(x.close);
          this.lineChart6m.xAxis.categories.push(moment(x.date).format('MM-YYYY'));
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
          name: symbol,
          data: []
        };
        
        // populate plotting points
        res.forEach((x) =>{
          series.data.push(x.close);
          this.lineChart3m.xAxis.categories.push(moment(x.date).format('MM-YYYY'));
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
      rangeSelector: {
        selected: 1
      },
      series: []
    };

  }
}
