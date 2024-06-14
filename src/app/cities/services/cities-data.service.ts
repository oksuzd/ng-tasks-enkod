import { Injectable } from '@angular/core';
import { City, ID } from "../models/city.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CitiesDataService {

  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.baseUrl);
  }

  getCityById(id: ID): Observable<City> {
    return this.http.get<City>(`${this.baseUrl}/${id}`);
  }

  addCity(city: City): Observable<City> {
    return this.http.post<City>(this.baseUrl, city);
  }

  updateCity(id: ID, city: Partial<City>): Observable<City> {
    return this.http.patch<City>(`${this.baseUrl}/${id}`, city);
  }

  deleteCity(id: ID): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
