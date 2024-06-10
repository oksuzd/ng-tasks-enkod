import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  pageTitle: string = 'Задания';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });
  }

  updateTitle() {
    const currentRoute = this.router.url;
    if (currentRoute.includes('cities-list')) {
      this.pageTitle = 'Список городов';
    } else if (currentRoute.includes('todo-list')) {
      this.pageTitle = 'Список задач';
    } else {
      this.pageTitle = 'Задания';
    }
  }
}
