import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { City } from "../../models/city.model";
import { CitiesQuery } from "../../state/cities.query";

@Component({
  selector: 'app-cities-tile',
  templateUrl: './cities-tile.component.html',
  styleUrls: ['./cities-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesTileComponent implements OnInit {
  cities$: Observable<City[]> | undefined;

  constructor(private citiesQuery: CitiesQuery) {}

  ngOnInit() {
    this.cities$ = this.citiesQuery.selectAll();
  }
}
