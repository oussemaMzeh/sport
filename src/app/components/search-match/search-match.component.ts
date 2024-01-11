import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-match',
  templateUrl: './search-match.component.html',
  styleUrls: ['./search-match.component.css']
})
export class SearchMatchComponent implements OnInit {
  title: string = 'Search Match By Team';
  searchMatchForm: FormGroup;
  obj: any = {};
  constructor(private router: Router) { }

  ngOnInit() {

  }
  searchMatchByTeam() {
    //console.log("here is user object",this.obj)
    localStorage.setItem("teamsToFind", JSON.stringify(this.obj));
    this.router.navigate([`allMatches/search`]);

  }

}
