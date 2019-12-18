import {Component, Input} from '@angular/core';
import {Person} from '@app/shared/models';

@Component({
  selector: 'app-graph-item',
  templateUrl: './graph-item.component.html',
  styleUrls: ['./graph-item.component.scss']
})
export class GraphItemComponent {
  @Input() data: Person;
}
