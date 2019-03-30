import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { StockPrice } from '../models/stock-price';

@Injectable({
  providedIn: 'root'
})
export class IxtradingService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.ixBaseUrl;

  getPrice1y(symbol:string): Observable<StockPrice[]> {
    return this.http.get<StockPrice[]>(this.baseUrl + '/stock/' + symbol + '/chart/1y');
  }
  
  getPrice6m(symbol:string): Observable<StockPrice[]> {
    return this.http.get<StockPrice[]>(this.baseUrl + '/stock/' + symbol + '/chart/6m');
  }

  getPrice3m(symbol:string): Observable<StockPrice[]> {
    return this.http.get<StockPrice[]>(this.baseUrl + '/stock/' + symbol + '/chart/3m');
  }
  
  getPrice(symbol:string, duration: string): Observable<StockPrice[]> {
    return this.http.get<StockPrice[]>(this.baseUrl + '/stock/' + symbol + '/chart/' + duration);
  }
}
