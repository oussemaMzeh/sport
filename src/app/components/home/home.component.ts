import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  match:any= {id:1,teamOne:"FCB",teamTwo:'RMD',scoreOne:1,scoreTwo:8}

  constructor() { }

  ngOnInit() {
  }

}
