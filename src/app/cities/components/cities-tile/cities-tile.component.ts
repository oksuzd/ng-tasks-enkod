import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { City } from "../../models/city.model";
import { CitiesStoreService } from "../../services/cities-store.service";

@Component({
  selector: 'app-cities-tile',
  templateUrl: './cities-tile.component.html',
  styleUrls: ['./cities-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesTileComponent implements OnInit {
  cities$: Observable<City[]> | undefined;

  constructor(private dataStore: CitiesStoreService) {}

  ngOnInit() {
    this.cities$ = this.dataStore.cities$;
  }
}
