import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allPlayers } from 'src/app/data/playersData';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  players: any = [];
  constructor(private playerService: PlayerService,
    private router: Router) { }

  ngOnInit() {
    //this.players = allPlayers
    this.allPlayers();

  }

  allPlayers() {
    this.playerService.getAllPlayers().subscribe(
      (data) => {
        //console.log("here response",data);
        //console.log("here response",data.p);
        //console.log("here response",data.msg);
        this.players = data.hereAllPlayers;
      }
    )
  } 

  goToDisplayPlayer(id: number) {
    this.router.navigate([`playerInfo/${id}`])
  }

  goToEditPlayer(id: number) {
    this.router.navigate([`editPlayer/${id}`])
  }

  deletePlayerById(id: number) {
    this.playerService.deletePlayers(id).subscribe(
      (data) => {
        console.log('here after delete', data.message);
        //supp directs sans ref
        //this.matches=data.matches
        this.allPlayers()

      }
    );
  }

}
