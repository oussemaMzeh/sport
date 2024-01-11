import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allPlayers } from 'src/app/data/playersData';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  title: string = "Player Info"
  playerId: any;
  players: any = allPlayers;
  findedPlayer: any;
  constructor(private activatedRoute: ActivatedRoute,
    private playerService: PlayerService) { }

  ngOnInit() {
    this.playerId = this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayersById(this.playerId).subscribe(
      (data) => {
        console.log('here player', data.findedPlayyer);
        this.findedPlayer = data.findedPlayyer
      }
    );
    //for (let i = 0; i < this.matches.length; i++) {
    //if(this.matches[i].id == this.matchId ){
    //this.findedMatch=this.matches[i];
    //break;
    //}  

    //this.findedPlayer=this.players.find(
    //(obj:any)=> {return obj.id==this.playerId}
    //)
    console.log('findedPlayer', this.findedPlayer);
  }

}
