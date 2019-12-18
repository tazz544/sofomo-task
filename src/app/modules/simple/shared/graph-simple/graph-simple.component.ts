import {Component, Input} from '@angular/core';
import {IGraphSection} from '@app/shared/interfaces/graph';

@Component({
  selector: 'app-graph-simple',
  templateUrl: './graph-simple.component.html',
  styleUrls: ['./graph-simple.component.scss']
})
export class GraphSimpleComponent {
  @Input() data: IGraphSection[];
}
