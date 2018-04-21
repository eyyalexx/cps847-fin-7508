import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent implements OnInit {

  date:number;
  temperature:string;
  condition:string;


  constructor(private http: Http) { }

  ngOnInit() {

    this.date = Date.now();

    //TORONTO WEATHER
    this.http.get('http://api.wunderground.com/api/90b9cb68e92b8d41/conditions/q/zmw:00000.178.71508.json')
      .subscribe(
        (response: Response) => {
          console.log(response.json());
          this.temperature = response.json().current_observation.temp_c;
          this.condition = response.json().current_observation.weather;
        });
    
  }

}
