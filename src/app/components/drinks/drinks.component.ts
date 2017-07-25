import { Component, OnInit } from '@angular/core';
import drinksList from "./drinks";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  drinksList: Object[];
  activeKind;

  constructor() { }

  ngOnInit() {
    this.drinksList = drinksList;
  }

    selectKind(kind){
      let activeKind: object = kind;
      console.log(activeKind);
    }

  }

