import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  pageTitle: string = '';
  items: MenuItem[] = [];
  activeItem: MenuItem = {} as MenuItem;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.items = [
      {label: 'Задание 1', routerLink: 'todo-list'},
      {label: 'Задание 2', routerLink: 'cities'}
    ];

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.updateTitle();
        this.updateActiveItem();
      });
  }

  updateTitle() {
    const routeToTitleMap = {
      'todo-list': 'Список задач',
      'cities/list': 'Список городов',
      'cities/tile': 'Список городов',
      'cities/create': 'Создать город',
      'cities/edit': 'Редактировать город'
    };

    const currentRoute = this.router.url;
    this.pageTitle = 'Задания';

    for (const [route, title] of Object.entries(routeToTitleMap)) {
      if (currentRoute.includes(route)) {
        this.pageTitle = title;
        this.cdr.detectChanges();
        break;
      }
    }
  }

  updateActiveItem() {
    const currentRoute = this.router.url;
    const foundItem = this.items.find(item => currentRoute.includes(item.routerLink));
    this.activeItem = foundItem ? foundItem : ({} as MenuItem);
  }
}
