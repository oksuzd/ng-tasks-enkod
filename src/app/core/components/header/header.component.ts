import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";
import { MenuItem } from "primeng/api";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
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
      {label: 'Задание 2', routerLink: 'cities'},
      {label: 'Задание 3', routerLink: 'basic-forms'},
      {label: 'Задание 4', routerLink: 'advanced-forms'},
      {label: 'Задание 5', routerLink: 'custom-directive'},
      {label: 'Задание 6', routerLink: 'custom-pipe'}
    ];

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        untilDestroyed(this)
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
      'cities/edit': 'Редактировать город',
      'basic-forms': 'Создание пользователя',
      'advanced-forms': 'Кастомный контрол',
      'custom-directive': 'Кастомная директива',
      'custom-pipe': 'Кастомный пайп'
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
