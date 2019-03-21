import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  baseUrl:string = environment.baseUrl;

  getSampleData() {
    return this.http.get(this.baseUrl + '/api/Values');
  }

}
