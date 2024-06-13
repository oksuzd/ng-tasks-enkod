import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pageTitle: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
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
        break;
      }
    }
  }
}
