import {Component} from '@angular/core';
import {fadeIn} from '@app/shared/animations';

@Component({
  selector: 'app-back-to-home',
  styleUrls: ['./back-to-home.component.scss'],
  animations: [fadeIn],
  template: `
    <div class="back-to-home">
        <a class="back-to-home__link" routerLink="/"><i class="fas fa-arrow-left"></i> Back to home</a>
    </div>
  `
})
export class BackToHomeComponent {
}
