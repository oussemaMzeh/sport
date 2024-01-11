import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() x: any;
  constructor() { }

  ngOnInit() {
  }
  scoreResult(s1, s2) {
    if (s1 > s2) {
      return 2
    }
    else if (s1 < s2) {
      return 1
    }
    else {
      return 3
    }
  }

  teamResult(t1,t2){
if (t1>t2){
  return 'blue'
}
else if (t1 < t2) {
  return 'red'
}
else {
  return 'yellow'
}
  }
}

