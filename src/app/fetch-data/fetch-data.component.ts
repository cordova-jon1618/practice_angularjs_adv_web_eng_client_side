import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})

export class FetchDataComponent {
  forecasts: WeatherForecast[] = [];
  baseURL: string = 'https://localhost:7068';
  //baseURL: string = 'https://localhost:7077';


    constructor(http: HttpClient){
      http.get<WeatherForecast[]>(this.baseURL + '/weatherforecast').subscribe({
        next: result => {
          this.forecasts = result;
        },
        error: error => {
          console.error(error);
        }
      })
    }
    //   fetch(this.baseURL + '/weatherforecast')
    //     .then(response => response.json() as Promise<WeatherForecast[]>)
    //     .then(data => {
    //       this.forecasts = data;
    // });
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
