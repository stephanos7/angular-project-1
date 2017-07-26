import { Component, OnInit } from '@angular/core';
import { Spirit } from "../../shared/models/spirit";
import spirits  from "./spirits";


@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
spirits: Object[] = spirits;
activeSpirit: Object;

  constructor() { 

  }

  ngOnInit() {
  }

    selectSpirit(spirit){
      this.activeSpirit = spirit;
      console.log(this.activeSpirit);
    }

  }

