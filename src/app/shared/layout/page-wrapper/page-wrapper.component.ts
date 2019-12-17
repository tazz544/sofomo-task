import {Component} from '@angular/core';

@Component({
  selector: 'app-page-wrapper',
  template: `
      <main class="main-content">
          <router-outlet></router-outlet>
      </main>
  `,
  styleUrls: ['./page-wrapper.component.scss']
})
export class PageWrapperComponent {
}
