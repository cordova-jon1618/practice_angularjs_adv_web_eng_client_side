import { Component } from '@angular/core';
import { Country } from './country';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  countries: Country[] = [];
  baseUrl: string = 'http://localhost:7182';

  constructor(http: HttpClient){
    http.get<Country[]>(environment.baseUrl + '/api/countries').subscribe({
      next: result => {
        this.countries = result;
      },
      error:error => {
        console.error(error);
      }
      
    });
  }
}

