import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  standalone: false,
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getWeatherData().subscribe(
      data => this.weatherData = data,
      error => this.errorMessage = error
    );
  }

  getWeatherData(): Observable<any> {
    const apiKey = '23820aa8d4554156bf551441243012';
    const city = 'Shiganshina';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    return this.http.get(url).pipe(
      catchError(error => {
        this.errorMessage = 'Failed to fetch weather data';
        return throwError(this.errorMessage);
      })
    );
  }
}