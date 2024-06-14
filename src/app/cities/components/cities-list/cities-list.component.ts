import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { City } from "../../models/city.model";
import { CitiesQuery } from "../../state/cities.query";


@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesListComponent implements OnInit {
  cities$: Observable<City[]> | undefined;

  constructor(private citiesQuery: CitiesQuery) {}

  ngOnInit() {
    this.cities$ = this.citiesQuery.selectAll();
  }
}
