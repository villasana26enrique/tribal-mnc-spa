import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url = '/api/search';

  constructor(public http: HttpClient) { }

  getSearch$( term: string ) {
    const data = {
      term
    };
    return this.http.post( this.url, data );
  }

}
