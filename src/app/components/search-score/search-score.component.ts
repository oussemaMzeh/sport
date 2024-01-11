import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-score',
  templateUrl: './search-score.component.html',
  styleUrls: ['./search-score.component.css']
})
export class SearchScoreComponent implements OnInit {
  title: string = 'Search Match By Score';
  searchScoreForm: FormGroup;
  obj: any = {};
  constructor() { }

  ngOnInit() {
  }

  searchMatchByScore(){

  }

}
