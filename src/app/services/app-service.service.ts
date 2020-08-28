import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  constructor(public http: HttpClient) { }

  public fetchData(): Observable<any> {
    return this.http.get<any>(` https://demo6335756.mockable.io/Countries`);
  }
}
