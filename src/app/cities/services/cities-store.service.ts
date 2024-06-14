import { Injectable } from '@angular/core';
import { City } from "../models/city.model";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { ID } from "@datorama/akita";

@Injectable({
  providedIn: 'root'
})
export class CitiesStoreService {

  private _cities$: BehaviorSubject<City[]> = new BehaviorSubject<City[]>([]);
  readonly cities$: Observable<City[]> = this._cities$.asObservable();

  setCitiesToStore(data: City[]) {
    this._cities$.next(data);
  }

  getCitiesFromStore(): City[] {
    console.log('CitiesList', this._cities$.getValue());
    return this._cities$.getValue();
  }

  getCityById(id: number): City | undefined {
    const cities: City[] = this.getCitiesFromStore();
    return cities.find(city => city.id === id);
  }

  addCity(newCity: City) {
    const cities: City[] = this.getCitiesFromStore();
    const cityExists = cities.some(city => city.id === newCity.id);
    if (cityExists) {
      throwError(() => new Error('City already exists'));
    } else {
      cities.push(newCity);
      this._cities$.next([...cities]);
    }
  }

  updateCity(updatedCity: City) {
    const cities: City[] = this.getCitiesFromStore();
    const index = cities.findIndex(city => city.id === updatedCity.id);
    if (index === -1) {
      throwError(() => new Error('City not found'));
    } else {
      cities[index] = updatedCity;
      this._cities$.next([...cities]);
    }
  }

  deleteCity(id: ID) {
    let cities: City[] = this.getCitiesFromStore();
    const initialLength: number = cities.length;
    cities = cities.filter(city => city.id !== id);
    if (cities.length === initialLength) {
      throwError(() => new Error('City not found or could not be deleted'));
    } else {
      this._cities$.next(cities);
    }
  }
}
