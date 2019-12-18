import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';

import {range} from 'lodash';

interface IHttpOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  options: IHttpOptions = {responseType: 'json'};

  constructor(private http: HttpClient) {
  }

  fetchPeople() {
    // Workaround for missing pageSize property:
    const pages = range(1, 5);
    const calls = pages.map(page => {
      return this.http.get<any>(environment.apiUrl + `people/?page=${page}`, this.options);
    });
    return forkJoin(calls)
      .pipe(map(res => {
        let data = [];
        res.forEach(item => {
          data = [...data, ...item.results];
        });
        return data;
      }));
  }
}
