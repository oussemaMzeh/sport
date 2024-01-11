import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { allMatches } from 'src/app/data/matchesData';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.css']
})
export class MatchFormComponent implements OnInit {
  matchForm = FormGroup;
  match: any = {}
  title: string = "Add match"
  matchId: any;
  matches: any = allMatches;
  constructor(private activatedRoute: ActivatedRoute,
    private matchService: MatchService,
    private router: Router) { }

  ngOnInit() {
    this.matchId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.matchId) {
      //(id existe donc on est dans le cas de edit)
      this.title = "edit Match";

      this.matchService.getMatchById(this.matchId).subscribe(
        (data) => {
          console.log('here is match obj', data.findedMattch);
          this.match = data.findedMattch
        }

      );
      //this.match=this.matches.find(
      //  (obj:any)=>{
      //  return obj.id ==this.matchId}
      //)
    }

  }

  addOrEditMatch() {
    console.log("here is user object", this.match)
    if (this.matchId) {
      //edit
      this.matchService.updateMatch(this.match).subscribe(
        (data) => {
          console.log('here after edit', data);
          this.router.navigate(['admin'])
        }
      );
    } else {
      //add
      this.matchService.addMatch(this.match).subscribe(
        (data) => {
          console.log('here data', data);
          this.router.navigate(['admin'])

        }
      );
    }
  }
} 
