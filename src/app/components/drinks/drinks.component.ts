import { Component, OnInit } from '@angular/core';
import drinksList from "./drinks";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  drinksList: Object[];

  constructor() { }

  ngOnInit() {
  }

}
