import { EntityState, EntityStore, ID, StoreConfig } from "@datorama/akita";
import { City } from "../models/city.model";
import { Injectable } from "@angular/core";

export interface CitiesState extends EntityState<City, ID> {}

@StoreConfig({ name: 'city' })
@Injectable({ providedIn: 'root' })
export class CitiesStore extends EntityStore<CitiesState> {
  constructor() {
    super();
  }
}
