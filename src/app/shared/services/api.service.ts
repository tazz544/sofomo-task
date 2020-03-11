import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';
import {IHttpOptions} from '@app/shared/interfaces';

import {range} from 'lodash';

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
        const data = [];
        res.forEach(item => {
          data.push(item.results);
        });
        return data;
      }));
  }
}
