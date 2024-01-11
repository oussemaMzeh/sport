import { Component, Input, OnInit } from '@angular/core';
import { allPlayers } from 'src/app/data/playersData';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  players:any=[]
  constructor() { }

  ngOnInit() {
    this.players=allPlayers
  }

}
