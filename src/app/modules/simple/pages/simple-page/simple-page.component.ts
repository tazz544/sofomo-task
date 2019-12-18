import {Component, OnDestroy, OnInit} from '@angular/core';
import {PeopleService} from '@app/shared/services/people.service';
import {Subscription} from 'rxjs';
import {IGraphSection} from '@app/shared/interfaces/graph';

@Component({
  selector: 'app-simple-page',
  templateUrl: './simple-page.component.html',
  styleUrls: ['./simple-page.component.scss']
})
export class SimplePageComponent implements OnInit, OnDestroy {
  dataSubscription: Subscription;
  data: IGraphSection[];
  loading: boolean;

  constructor(private peopleService: PeopleService) {
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading = true;
    this.dataSubscription = this.peopleService.get().subscribe(res => {
      this.data = res;
      console.log('OUTPUT:');
      console.log(res);
      this.loading = false;
    });
  }
}
