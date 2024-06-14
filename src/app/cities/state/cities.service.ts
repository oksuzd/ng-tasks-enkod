import { Injectable } from "@angular/core";

import { CitiesDataService } from "../services/cities-data.service";
import { tap } from "rxjs";
import { ID } from "@datorama/akita";
import { City } from "../models/city.model";
import { CitiesQuery } from "./cities.query";
import { CitiesStore } from "./cities.store";

@Injectable({providedIn: 'root'})
export class CitiesService {
  constructor(
    private cityStore: CitiesStore,
    private cityQuery: CitiesQuery,
    private citiesDataService: CitiesDataService
  ) {
  }

  getCities() {
    return this.citiesDataService.getCities().pipe(
      tap(cities => {
        this.cityStore.set(cities);
      })
    );
  }

  getCityById(id: ID): City | undefined {
    return this.cityQuery.getEntity(id);
  }

  addCity(city: City) {
    return this.citiesDataService.addCity(city).pipe(
      tap(newCity => {
        this.cityStore.add(newCity);
      })
    );
  }

  updateCity(city: City) {
    return this.citiesDataService.updateCity(city.id, city).pipe(
      tap(updatedCity => {
        this.cityStore.update(city.id, updatedCity);
      })
    );
  }

  deleteCity(id: ID) {
    return this.citiesDataService.deleteCity(id).pipe(
      tap(() => {
        this.cityStore.remove(id);
      })
    );
  }
}
