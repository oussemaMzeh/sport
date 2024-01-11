import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allMatches } from 'src/app/data/matchesData';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  title: string = "Match Info"
  matchId: any;
  matches: any = allMatches;
  findedMatch: any;
  constructor(private activatedRoute: ActivatedRoute,
    private matchService: MatchService) { }

  ngOnInit() {
    this.matchId = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.matchId).subscribe(
      (data) => {
        console.log('here match', data.findedMattch);
        this.findedMatch = data.findedMattch
      }
    );
    //for (let i = 0; i < this.matches.length; i++) {
    //if(this.matches[i].id == this.matchId ){
    //this.findedMatch=this.matches[i];
    //break;
    //}  

    //this.findedMatch=this.matches.find(
    //(obj:any)=> {return obj.id==this.matchId}
    //)
    console.log('findedMatch', this.findedMatch);

  }
}
