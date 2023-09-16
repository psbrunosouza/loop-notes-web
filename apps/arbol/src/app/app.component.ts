import { Component } from '@angular/core';
import { IMenuItem } from '@arbol-org/majoris-ui';

@Component({
  selector: 'arbol-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'arbol';

  menuItems: IMenuItem[] = [
    {
      icon: 'add_circle',
      link: 'add',
    },
    {
      icon: 'home',
      link: 'home',
    },
    {
      icon: 'category',
      link: 'category',
    },
  ];
}
