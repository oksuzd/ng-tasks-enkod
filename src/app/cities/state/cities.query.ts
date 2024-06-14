import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { CitiesState, CitiesStore } from "./cities.store";

@Injectable({ providedIn: 'root' })
export class CitiesQuery extends QueryEntity<CitiesState> {
  constructor(protected override store: CitiesStore) {
    super(store);
  }
}
