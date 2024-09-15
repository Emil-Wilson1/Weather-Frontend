import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl='http://localhost:3000'
  constructor(private http:HttpClient) { }

  getWeather(city:string):Observable<Weather>{
    return this.http.get<Weather>(`${this.apiUrl}/weather/${city}`)
  }
}
