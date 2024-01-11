import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { allTeams } from 'src/app/data/teamsData';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  title: string = 'Add Team'
  addTeamsForm: FormGroup;
  obj: any = {};
  //staduims: any;
  //teamsTab: any;
  //id: any;
  //teams:any = allTeams;
  constructor(private activatedRoute: ActivatedRoute,
    private teamService: TeamService,
    private router:Router) { }

  ngOnInit() {
    //this.id = this.activatedRoute.snapshot.paramMap.get('id')
    // if (this.id) {
    //this id existe donc on est dans le cas de edit
    //   this.title = 'Edit Team'

    //   this.obj = this.teams.find(
    //    (obj: any) => { return obj.id == this.id }
    //   )

    // }
    //  this.staduims = JSON.parse(localStorage.getItem('staduim') || '[]');
  }


  addTeam() {
    console.log("here team object", this.obj);
    this.teamService.addTeam(this.obj).subscribe(
      (data) => {
        console.log("here data", data);
        this.router.navigate(['admin'])

      }
    )
  }




  //addTeam() {
  //   this.teamsTab = JSON.parse(localStorage.getItem('teams') || '[]');
  //  this.obj.id = this.generateId(this.teamsTab) + 1;
  //  this.teamsTab.push(this.obj);
  //  localStorage.setItem('teams', JSON.stringify(this.teamsTab))
  //}
  //generateId(T) {
  //let max;
  //if (T.length == 0) {
  //   max = 0;
  // } else {
  //   max = T[0].id;
  // for (let i = 0; i < T.length; i++) {
  //   if (T[i].id > max) {
  //     max = T[i].id
  //   }
  // }
  // }
  // return max;

  // }
}
