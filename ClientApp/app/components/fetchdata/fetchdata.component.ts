import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../../services';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];

    constructor(http: Http, api: ApiService) {
        api.get('/SampleData/WeatherForecasts').subscribe(data => {            
            this.forecasts = data as WeatherForecast[];
        });
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
