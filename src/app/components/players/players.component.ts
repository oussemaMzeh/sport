import { Component, OnInit } from '@angular/core';
import { allPlayers } from 'src/app/data/playersData';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
players:any=[];
title:string="Players"

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    //this.players=allPlayers;
    this.playerService.getAllPlayers().subscribe(
      (data)=>{
        console.log("here response",data);
        console.log("here response",data.hereAllPlayers);
        console.log("here response",data.msg);
        this.players=data.hereAllPlayers;
      }
    );

  }

}
