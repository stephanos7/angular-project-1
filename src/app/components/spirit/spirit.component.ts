import { Component, Input } from '@angular/core';
import { Spirit } from '../../shared/models/spirit';
import spirits  from "../drinks/spirits";


@Component({
  selector: 'app-spirit',
  template: `
      <div class="jumbotron" *ngIf="spirit">
            <p>{{spirit.description}}<p>
            <hr>
            <h4>EDIT</h4>
            <textarea class="form-control" rows="5" [(ngModel)]="spirit.description"></textarea>
      </div>
      `,
  styleUrls: ['./spirit.component.css']
})
export class SpiritComponent {
  spirits: Object[] = spirits;

  @Input() 
  spirit : Spirit; 

  constructor() { }

}
