import {Component} from '@angular/core';
import {fadeIn, fadeOut} from '@app/shared/animations';

@Component({
  selector: 'app-page-wrapper',
  template: `
      <main @fadeIn @fadeOut>
          <router-outlet></router-outlet>
      </main>
  `,
  styleUrls: ['./page-wrapper.component.scss'],
  animations: [fadeIn, fadeOut]
})
export class PageWrapperComponent {
}
