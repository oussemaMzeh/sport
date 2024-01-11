import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { allPlayers } from 'src/app/data/playersData';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
import { log } from 'util';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  playerForm: FormGroup;
  title: string = "Add Player";
  playerId: any;
  obj: any = {};
  players: any = allPlayers;
  teams: any = [];
  teamId: any;
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private router: Router,
    private teamSerice: TeamService
  ) { }

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['',],
      nbr: ['',],
      position: ['',]
    })
    this.playerId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.playerId) {
      //(id existe donc on est dans le cas de edit)
      this.title = "Edit Player"

      this.playerService.getPlayersById(this.playerId).subscribe(
        (data) => {
          console.log('here is player obj', data.findedPlayyer);
          this.obj = data.findedPlayyer
        }
      );
      //this.obj = this.players.find(
      //(obj: any) => {
      //return obj.id == this.id
      //}
      //)
    }


    this.teamSerice.getAllTeams().subscribe(
      (data) => {
        this.teams = data.teamsTab;
      }
    )
  }
  addOrEditPlayer() {
    // console.log('players', this.playerForm.value);
    console.log("here is user object", this.obj)
    if (this.playerId) {
      //edit
      this.playerService.updatePlayer(this.obj).subscribe(
        (data) => {
          console.log('here after edit', data);
          this.router.navigate(['admin'])
        }
      );
    } else {
      //add
      // console.log("here is player obj", this.obj);
      this.obj.tId = this.teamId;
      console.log("here final obj", this.obj);

      this.playerService.addPlayer(this.obj).subscribe(
        (data) => {
        console.log('here data', data);
        this.router.navigate(['admin'])

        }
      );
    }
  }

  selectTeam(evt) {
    //console.log("here event", evt.target.value);
    this.teamId = evt.target.value
  }

}
