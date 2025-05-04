import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const url = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getData(apiName: string): Observable<any> {
    return this.http.get(`${url}${apiName}`);
  }
  
  postDataWithoutRequestBody(apiName: string): Observable<any> {
    return this.http.post(`${url}${apiName}`, {
      headers: this.getHeaders()
    });
  }

  postDataWithBody(apiName: string, body: any): Observable<any> {
    return this.http.post(`${url}${apiName}`, body, {
      headers: this.getHeaders()
    });
  }
}
