import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { City } from "../../models/city.model";
import { CitiesStoreService } from "../../services/cities-store.service";

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesListComponent implements OnInit {
  cities$: Observable<City[]> | undefined;

  constructor(private dataStore: CitiesStoreService) {}

  ngOnInit() {
    this.cities$ = this.dataStore.cities$;
  }
}
