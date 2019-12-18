import {Injectable} from '@angular/core';
import {ApiService} from '@app/shared/services/api.service';
import {map} from 'rxjs/operators';
import {Person} from '@app/shared/models';
import {IGraphSection, IRange} from '@app/shared/interfaces';
import {GLOBAL} from '@app/shared/constants/global.constants';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private apiService: ApiService) {
  }

  private assignToSections(res: Person[]) {
    const ranges: IRange[] = GLOBAL.YEAR_RANGES;
    const result: IGraphSection[] = ranges.map(range => {
      const section: IGraphSection = {};
      section.name = (range.to) ? `${range.from}-${range.to}BBY` : `${range.from}+BBY`;
      section.data = res.filter(item => {
        const conditions: boolean[] = [
          !!item.birthYear,
          item.birthYear >= range.from
        ];
        if (range.to) {
          conditions.push(item.birthYear < range.to);
        }
        return conditions.every(condition => !!condition);
      });
      return section;
    });
    const unknowns = {
      name: 'Unknown',
      data: res.filter(item => !item.birthYear)
    };
    result.push(unknowns);
    return result;
  }

  get() {
    return this.apiService.fetchPeople()
      .pipe(map(res => {
        res = res.map(item => new Person(item));
        res = this.assignToSections(res);
        return res;
      }));
  }
}
