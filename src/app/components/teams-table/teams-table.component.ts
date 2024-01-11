import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { allTeams } from 'src/app/data/teamsData';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teams: any = []
  path: string;
  isDisplayed: boolean = false;
  searchStaduimForm: FormGroup;
  obj: any = {};
  findedTeams: any = []
  constructor(private router: Router,
    private teamService:TeamService ) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(
      (data)=>{
        this.teams=data.teamsTab
      }
    )
    //recuperer le path
    this.path = this.router.url;
    if (this.path == '/admin') {
      this.isDisplayed = true
    }
  }
  goToDisplayTeam(id){
    this.router.navigate([`teamInfo/${id}`])
  }
  goToEditTeam(id){
    this.router.navigate([`editTeam/${id}`])

  }
  searchTeamsByStaduim() {
    //console.log("here is Staduim", this.obj);
    this.teams = allTeams;
    this.findedTeams = [];
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].Staduim == this.obj.staduim) {
        this.findedTeams.push(this.teams[i])
      }
    }
    this.teams = this.findedTeams;
  }
} 
