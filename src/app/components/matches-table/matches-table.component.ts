import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allMatches } from 'src/app/data/matchesData';
import { MatchService } from 'src/app/services/match.service';
import { log } from 'util';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matches: any = [];

  constructor(private router: Router,
    private matchService: MatchService) { }

  ngOnInit() {
    //this.matches=allMatches
    //this.matchService.getAllMatches().subscribe(
    //(data) => {
    //console.log("here response", data);
    //console.log("here response", data.t);
    //console.log("here response", data.msg);
    //this.matches = data.t;
    //}
    //);
    this.allMatches();
  }

  allMatches() {
    this.matchService.getAllMatches().subscribe(
      (data) => {
        this.matches = data.hereAllMatches;
      })
  }

  goToDisplay(id: number) {
    this.router.navigate([`matchInfo/${id}`])
  }

  goToEdit(id: number) {
    this.router.navigate([`editMatch/${id}`])
  }
  deleteMatchById(id: number) {
    this.matchService.deleteMatch(id).subscribe(
      (data) => {
        console.log('here after delete', data.message);
        //supp directs sans ref
        //this.matches=data.matches
        this.allMatches()

      }
    );
  }
}

