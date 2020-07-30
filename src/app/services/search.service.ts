import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url = '/api/search';

  constructor(public http: HttpClient) { }

  getSearch$( term: string ): Observable<any> {
    const data = {
      term
    };
    return this.http.post<any>( this.url, data );
  }

}
