import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  searchForm: FormGroup;
  title: string = "Search Weather";
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private weatherService: WeatherService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      Search: ['', [Validators.required]],

    });

  }

  search() {
    console.log('search', this.searchForm.value);
    this.weatherService.weather(this.searchForm.value).subscribe(
      (data) => {
        console.log('search', data.result);
      }
    )

  }
}

