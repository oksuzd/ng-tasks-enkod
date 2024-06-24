import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { City } from "../../models/city.model";
import { CitiesService } from "../../state/cities.service";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-cities-page',
  templateUrl: './cities-page.component.html',
  styleUrls: ['./cities-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CitiesPageComponent implements OnInit {

  constructor(
    private citiesService: CitiesService,
  ) {}

  ngOnInit() {
    this.loadCities();
  }

  onDataReceived(data: City) {
    this.createNewCity(data);
  }

  private createNewCity(city: City) {
    this.citiesService.addCity(city)
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  private loadCities() {
    this.citiesService.getCities()
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
