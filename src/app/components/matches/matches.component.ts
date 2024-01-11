import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allMatches } from 'src/app/data/matchesData';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: any = [];
  title: string = "Matches"
  teamsToFind: any;
  findedMatches: any;
  path: string;

  
  constructor(private router: Router,
    private matchService: MatchService) { } 

  ngOnInit() {
    //this.matches=allMatches
    //appel de la methode du service
    this.matchService.getAllMatches().subscribe(
      (data)=>{
        console.log("here response",data);
        console.log("here response",data.hereAllMatches);
        console.log("here response",data.msg);
        this.matches=data.hereAllMatches;
      }
    );
    //get from LS     
    this.teamsToFind = JSON.parse(localStorage.getItem('teamsToFind'));
    //search matches
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].teamOne == this.teamsToFind.team ||
        this.matches[i].teamTwo == this.teamsToFind.team) {
        this.findedMatches.push(this.matches[i]);
      }
    }
    //recupere le path
    this.path = this.router.url;
    //condition for the path
    if (this.path == '/allMatches/search') {
      this.matches = this.findedMatches;
    }
  }

}
