import { Component } from '@angular/core';
import { WeatherService } from '../weather-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
      city:string=''
      weather:any;
 
      constructor(private weatherService:WeatherService){}

      getWeather(){
        this.weatherService.getWeather(this.city).subscribe(
          (data)=>{
            this.weather=data;
          },
          (error)=>{
            console.log('Error fetching weather',error);
            
          }
        )
      }


      addFavorite(){}
}
