import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl: string = "http://localhost:3000/weather"

  constructor(private httpClient:HttpClient) { }

//methode du services pour envoyer l'obj tape l'utilisateur a la partie backend
weather(obj) {
  return this.httpClient.post<{ result: any }>(this.weatherUrl, obj);
}

}
