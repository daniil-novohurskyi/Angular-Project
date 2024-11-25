import { Component, EventEmitter, Output } from '@angular/core';
import {DropdownDirective} from '../shared/dropdown.directive';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    DropdownDirective,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
