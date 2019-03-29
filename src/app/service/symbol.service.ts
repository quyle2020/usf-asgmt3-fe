import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { StockDividend } from '../models/stock-dividend';
import { StockFinancial } from '../models/stock-financial';
import { StockPrice } from '../models/stock-price';

@Injectable({
  providedIn: 'root'
})
export class SymbolService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.baseUrl;


  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.baseUrl + '/stock/getStocks');
  }

  getStockDividend(symbol: string): Observable<StockDividend[]> {
    return this.http.get<StockDividend[]>(this.baseUrl + '/stock/getStockDividend/' + symbol);
  }

  getStockFinancialData(symbol: string): Observable<StockFinancial[]> {
    return this.http.get<StockFinancial[]>(this.baseUrl + '/stock/getStockFinance/' + symbol);
  }
  getStockPriceData(symbol: string): Observable<StockPrice[]> {
    return this.http.get<StockPrice[]>(this.baseUrl + '/stock/getStockPrice/' + symbol);
  }
}
