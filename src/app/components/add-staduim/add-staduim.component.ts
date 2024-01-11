import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { generate } from 'rxjs';
import { log } from 'util';

@Component({
  selector: 'app-add-staduim',
  templateUrl: './add-staduim.component.html',
  styleUrls: ['./add-staduim.component.css']
})
export class AddStaduimComponent implements OnInit {
  title: string = "add-Staduim";
  addStaduim: FormGroup;
  staduimTab: any;
  staduim: any
  constructor(private X: FormBuilder) { }

  ngOnInit() {
    this.addStaduim = this.X.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      city: [''],
      capacity: ['']

    })
  }

  addStade() {
    console.log("staduim", this.addStaduim.value);
    this.staduimTab = JSON.parse(localStorage.getItem('staduim') || '[]')
    this.staduim = this.addStaduim.value;
    this.staduim.id = this.generateId(this.staduimTab) + 1;
    console.log("staduim obj", this.staduim);
    this.staduimTab.push(this.staduim);
    localStorage.setItem('staduim', JSON.stringify(this.staduimTab))
  }
  generateId(T) {
    let max; 
    if (T.length == 0) {
      max = 0;
    } else {
      max = T[0].id;
      for (let i = 0; i < T.length; i++) {
        if (T[i].id > max) {
          max = T[i].id
        }
      }
    }     
     return max;

  }
}
