import { Component } from '@angular/core';
import {fadeIn} from '@app/shared/animations';

@Component({
  selector: 'app-spinner',
  styleUrls: ['./spinner.component.scss'],
  animations: [fadeIn],
  template: `
      <div class="lds-ellipsis" @fadeIn>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
  `
})
export class SpinnerComponent {
}
