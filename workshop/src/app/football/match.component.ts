import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Match } from '../models';

@Component({
  selector: 'my-match',
  moduleId: module.id,
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {
  public match: Match;
}
