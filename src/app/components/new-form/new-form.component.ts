import { Component, OnInit } from '@angular/core';
import { Spirit } from "../../shared/models/spirit";
import { FormsModule } from '@angular/forms';
import spirits  from "../drinks/spirits";

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
