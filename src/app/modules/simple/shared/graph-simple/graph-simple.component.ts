import {Component, Input} from '@angular/core';
import {IGraphSection} from '@app/shared/interfaces';
import {fadeIn} from '@app/shared/animations';
import {GLOBAL} from '@app/shared/constants/global.constants';

@Component({
  selector: 'app-graph-simple',
  templateUrl: './graph-simple.component.html',
  styleUrls: ['./graph-simple.component.scss'],
  animations: [fadeIn]
})
export class GraphSimpleComponent {
  @Input() data: IGraphSection[];
  legend: string[] = GLOBAL.BMI_RANGES.map(item => item.name);
}
