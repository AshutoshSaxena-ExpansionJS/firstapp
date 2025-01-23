import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-weather',
  standalone: false,
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  // animations: [
  //   trigger('slideInOut', [
  //     transition(':enter', [
  //       style({ transform: 'translateX(100%)', opacity: 0 }),
  //       animate('500ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
  //     ]),
  //     transition(':leave', [
  //       animate('500ms ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
  //     ])
  //   ])
  // ]
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  errorMessage: string = '';
  city: string = 'Lucknow';
  condition: string = '';


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getWeatherData().subscribe(
      data => {
        this.weatherData = data;
        this.condition = this.weatherData.current.condition.text.toLowerCase();
      },
      error => this.errorMessage = error
    );
  }

  getWeatherData(): Observable<any> {
    const apiKey = '23820aa8d4554156bf551441243012';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.city}`;

    return this.http.get(url).pipe(
      catchError(error => {
        this.errorMessage = 'Failed to fetch weather data';
        return throwError(this.errorMessage);
      })
    );
  }

  updateCity(newCity: string): void {
    this.city = newCity;
    localStorage.setItem('city', newCity);
    this.getWeatherData().subscribe(
      data => {
        this.weatherData = data;
        this.condition = this.weatherData.current.condition.text.toLowerCase();
      },
      error => this.errorMessage = error
    );
  }
}
