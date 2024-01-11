import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allTeams } from 'src/app/data/teamsData';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
title:string='Team Info';
id:any;
t:any={};
teams=allTeams
  constructor(private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRouter.snapshot.paramMap.get("id");
    this.t=this.teams.find(
      (obj)=>{return obj.id ==this.id}
    )
  }

}
