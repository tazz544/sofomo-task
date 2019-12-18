import {Component} from '@angular/core';
import {fadeIn, fadeOut} from '@app/shared/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [fadeIn, fadeOut]
})
export class HomePageComponent {
}
